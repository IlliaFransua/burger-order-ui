import { Button } from "@/shared/ui/Button"
import { CancelIcon } from "@/shared/ui/CancelIcon"

export const OpenOrdersWindow = ({ isEditMode, orderId, isDisabled }) => {
  function handleOpen() {
    if (isDisabled) {
      window.close()
      return
    }

    if (window.confirm("Are you sure you want to close this window? Changes will not be saved in this case.")) {
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

