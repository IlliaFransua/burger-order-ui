import { AppBar as MuiAppBar, CssBaseline, Box } from "@mui/material";
import { Toolbar } from "../Toolbar";

export function AppBar({ children }) {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <MuiAppBar >
          {children}
        </MuiAppBar>
      </Box>
      <Toolbar ></Toolbar>
    </>
  );
}

