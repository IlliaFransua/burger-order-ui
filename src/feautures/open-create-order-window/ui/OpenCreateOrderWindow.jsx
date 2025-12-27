import { CreateIcon } from "@/shared/ui/CreateIcon";
import { Button } from "@/shared/ui/Button";

export const OpenCreateOrderWindowButton = () => {
  function handleCreate() {
    window.open(`/order/create`, "_blank");
  }

  return (
    <Button
      label={"Create order"}
      startIcon={<CreateIcon />}
      onClick={handleCreate}
    />
  );
};
