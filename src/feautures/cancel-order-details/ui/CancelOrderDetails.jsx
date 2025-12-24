import { Button } from "@/shared/ui/Button"
import { CancelIcon } from "@/shared/ui/CancelIcon"

export const CancelOrderDetails = ({ isEditMode, orderId, isDisabled }) => {
  function handleOpen() {
    if (!isEditMode) {
      window.close()

    } else if (isDisabled) {
      window.location.href = `/order/${orderId}`

    } else if (window.confirm("Are you sure you want to close this window? Changes will not be saved in this case.")) {
      window.location.href = `/order/${orderId}`
    }
  }

  return (
    <Button
      variant="outlined"
      label={'Cancel'}
      startIcon={<CancelIcon />}
      onClick={handleOpen}
    />
  )
}

