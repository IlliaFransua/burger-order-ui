import { CreateIcon } from "@/shared/ui/CreateIcon";
import { Button } from "@/shared/ui/Button";
import { useState } from "react";
import { updateOrder } from "../api/orderService";
import { areArraysEqual } from "@/shared/lib";

export const EditOrderButton = ({
  orderId,
  isEditMode,
  allAvailableBurgers,
  selectedRows,
  originalBurgerIds,
  setIsDisabled,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  function toFinalIds() {
    let finalIds = [];

    if (Array.isArray(selectedRows)) {
      finalIds = selectedRows;
    } else if (selectedRows.ids.length === 0) {
      finalIds = [];
    } else if (selectedRows.type === "exclude") {
      if (selectedRows.ids.length === 0) {
        finalIds = allAvailableBurgers.map((burger) => burger.id);
      } else {
        finalIds = allAvailableBurgers
          .map((burger) => burger.id)
          .filter((id) => !selectedRows.ids.has(id));
      }
    } else if (selectedRows.type === "include") {
      finalIds = Array.from(selectedRows.ids);
    }

    return finalIds;
  }

  async function handleCreate() {
    if (!isEditMode) {
      window.location.assign(window.location.pathname + "/edit");
    }

    const finalIds = toFinalIds();

    if (finalIds.length === 0) {
      return;
    }

    try {
      setIsLoading(true);
      const responseData = await updateOrder(orderId, finalIds);
      alert("Order successfully updated");
      window.location.href = `/order/${responseData.id}`;
    } catch (error) {
      console.log(error);
      alert(
        "Something went wrong. Reload the page and see if the order was successfully updated.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  function checkIsDesabled() {
    const finalIds = toFinalIds();
    const isDisabled =
      finalIds.length === 0 || areArraysEqual(originalBurgerIds, finalIds);
    setIsDisabled(isDisabled);
    return isDisabled;
  }

  return (
    <Button
      label={"Update order"}
      startIcon={<CreateIcon />}
      onClick={handleCreate}
      isLoading={isLoading}
      isDisabled={checkIsDesabled()}
    />
  );
};
