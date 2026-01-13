import { DataGrid } from "@/shared/ui/DataGrid";
import { responseBurgersColumns } from "../config/columnTypes";

const emptySelection = { type: "include", ids: new Set() };

export const BurgersTable = ({
  burgers,
  isEditMode,
  selectionModel,
  onSelectionChange,
  ...others
}) => {
  console.log(burgers);
  return (
    <DataGrid
      {...others}
      rows={burgers}
      columns={responseBurgersColumns}
      checkboxSelection={isEditMode}
      rowSelectionModel={isEditMode ? selectionModel : emptySelection}
      onRowSelectionModelChange={isEditMode ? onSelectionChange : undefined}
      disableRowSelectionOnClick={!isEditMode}
    />
  );
};
