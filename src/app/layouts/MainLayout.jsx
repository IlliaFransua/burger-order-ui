import { AppBar } from "@/shared/ui/AppBar";
import { Container } from "@/shared/ui/Container";
import { Stack } from "@/shared/ui/Stack";
import { Toolbar } from "@/shared/ui/Toolbar";
import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Burger Order UI
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Stack>
          <Outlet />
        </Stack>
      </Container>
    </>
  );
};
