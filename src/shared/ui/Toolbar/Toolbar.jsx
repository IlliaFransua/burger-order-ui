import { Toolbar as MuiToolbar } from "@mui/material";

export function Toolbar({ children }) {
  return (
    <MuiToolbar variant="dense">
      {children}
    </MuiToolbar>
  )
}
