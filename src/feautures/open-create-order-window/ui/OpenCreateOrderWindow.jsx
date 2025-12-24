import { CreateIcon } from "@/shared/ui/CreateIcon"
import { Button } from "@/shared/ui/Button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const OpenCreateOrderWindowButton = () => {
  function handleCreate() {
    window.open(`/order/create`, '_blank');
  }

  return (
    <Button
      label={'Create order'}
      startIcon={<CreateIcon />}
      onClick={handleCreate}
    />
  )
}

