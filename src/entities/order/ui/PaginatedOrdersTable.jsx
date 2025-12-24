import { DataGrid } from "@/shared/ui/DataGrid"
import { getPaginatedOrders } from "../api/orderService"
import { Skeleton } from "@mui/material"
import { paginatedOrdersColumns } from "../config/columnTypes"

export const PaginatedOrdersTable = ({ responseData, isLoading, onPaginationModelChange, sortModel, onSortModelChange, handleEdit, handleDelete, handleView }) => {
  if (isLoading) {
    return <Skeleton sx={{ height: '400px' }} />
  }
  return (
    <DataGrid
      rows={responseData.content}
      columns={paginatedOrdersColumns({ handleEdit, handleDelete, handleView })}
      rowCount={responseData.totalElements}

      paginationMode="server"
      initialState={{
        pagination: {
          paginationModel: {
            page: responseData.number,
            size: responseData.size,
            pageSize: responseData.pageable.pageSize
          },
        }
      }}
      onPaginationModelChange={onPaginationModelChange}
      pageSizeOptions={[5, 10, 25, 100]}

      sortingMode="server"
      sortModel={sortModel}
      onSortModelChange={onSortModelChange}

      disableColumnFilter
    />
  )
}

