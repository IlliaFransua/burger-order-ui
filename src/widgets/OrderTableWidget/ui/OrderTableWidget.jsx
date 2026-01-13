import {
  deleteOrder,
  PaginatedOrdersTable,
  usePaginatedOrders,
} from "@/entities/order";
import { DataGridDemo } from "@/shared/ui/DataGrid";

export const OrderTableWidget = ({ initialFilterParams, updateParams }) => {
  const {
    data: paginatedOrders,
    isLoading,
    refetch,
  } = usePaginatedOrders(initialFilterParams);

  const onPaginationModelChange = (model) => {
    updateParams({ size: model.pageSize, page: model.page });
  };

  const onSortModelChange = (model) => {
    if (!model.length) return;
    updateParams({ sort: model[0].field, desc: model[0].sort === "desc" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;

    const res = await deleteOrder(id);
    if (res.status === 204) {
      alert("Order removed");
      refetch();
    }
  };

  return (
    <PaginatedOrdersTable
      isLoading={isLoading}
      paginatedOrders={paginatedOrders}
      onPaginationModelChange={onPaginationModelChange}
      sortModel={[
        {
          field: initialFilterParams.sort,
          sort: initialFilterParams.desc ? "desc" : "asc",
        },
      ]}
      onSortModelChange={onSortModelChange}
      handleView={(id) => window.open(`/order/${id}`, "_blank")}
      handleEdit={(id) => window.open(`/order/${id}/edit`, "_blank")}
      handleDelete={handleDelete}
    />
  );
};
