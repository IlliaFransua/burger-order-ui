import { Button } from "@/shared/ui/Button";
import { Stack } from "@/shared/ui/Stack";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <Stack>
      <h1>404 not found</h1>
      <Link to={"/"}>Open home page</Link>
    </Stack>
  );
};
