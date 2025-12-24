import { DataGrid } from "@/shared/ui/DataGrid"
import { responseBurgersColumns } from "../config/columnTypes"

export const BurgersTable = ({ burgers, isEditMode, selectionModel, onSelectionChange, ...others }) => {
  console.log(burgers)
  return (
    <DataGrid
      {...others}
      rows={burgers}
      columns={responseBurgersColumns}
      checkboxSelection={isEditMode}
      rowSelectionModel={isEditMode ? selectionModel : { type: 'include', ids: new Set() }}
      onRowSelectionModelChange={isEditMode && onSelectionChange}
      disableRowSelectionOnClick={!isEditMode}
    />
  )
}

