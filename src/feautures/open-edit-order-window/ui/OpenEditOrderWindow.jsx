import { Button } from "@/shared/ui/Button";
import { EditIcon } from "@/shared/ui/EditIcon";
import { useNavigate } from "react-router-dom";

export const OpenEditOrderWindow = ({ orderId }) => {
  function handleEdit() {
    window.location.href = `/order/${orderId}/edit`
  }

  return (
    <Button
      label={'Edit order'}
      startIcon={<EditIcon />}
      onClick={handleEdit}
    />
  )
}

