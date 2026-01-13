import { DataGrid } from "@/shared/ui/DataGrid";
import { Skeleton } from "@mui/material";
import { paginatedOrdersColumns } from "../config/columnTypes";

export const PaginatedOrdersTable = ({
  paginatedOrders,
  isLoading,
  onPaginationModelChange,
  sortModel,
  onSortModelChange,
  handleEdit,
  handleDelete,
  handleView,
}) => {
  if (isLoading) {
    return <Skeleton sx={{ height: "400px" }} />;
  }

  return (
    <DataGrid
      rows={paginatedOrders.content}
      columns={paginatedOrdersColumns({ handleEdit, handleDelete, handleView })}
      rowCount={paginatedOrders.totalElements}
      paginationMode="server"
      initialState={{
        pagination: {
          paginationModel: {
            page: paginatedOrders.number,
            size: paginatedOrders.size,
            pageSize: paginatedOrders.pageable.pageSize,
          },
        },
      }}
      onPaginationModelChange={onPaginationModelChange}
      pageSizeOptions={[5, 10, 25, 100]}
      sortingMode="server"
      sortModel={sortModel}
      onSortModelChange={onSortModelChange}
      disableColumnFilter
    />
  );
};
