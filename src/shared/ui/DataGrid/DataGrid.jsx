import Box from "@mui/material/Box";
import { DataGrid as MuiDataGrid } from "@mui/x-data-grid";

export function DataGrid({ columns, rows, sx, ...other }) {
  return (
    <Box sx={{ width: "100%", ...sx }}>
      <MuiDataGrid
        signature="DataGrid"
        rows={rows}
        columns={columns}
        {...other}
      />
    </Box>
  );
}
