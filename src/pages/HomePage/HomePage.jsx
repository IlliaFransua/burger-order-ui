import { Stack } from "@/shared/ui/Stack";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <Stack>
      <h1>Home Page</h1>
      <Link to={"/order"}>Open orders page</Link>
    </Stack>
  );
};
