import { CreateIcon } from "@/shared/ui/CreateIcon"
import { createOrder } from "../api/orderService"
import { Button } from "@/shared/ui/Button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const CreateOrderButton = ({ burgers, selectedRows }) => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  function toFinalIds() {
    let finalIds = []

    if (Array.isArray(selectedRows)) {
      finalIds = selectedRows

    } else if (selectedRows.type === "exclude") {
      if (selectedRows.ids.length === 0) {
        finalIds = burgers.map(burger => burger.id)
      } else {
        finalIds = burgers
          .map(burger => burger.id)
          .filter(id => !selectedRows.ids.has(id))
      }

    } else if (selectedRows.type === "include") {
      finalIds = Array.from(selectedRows.ids)
    }

    return finalIds
  }

  async function handleCreate() {
    const finalIds = toFinalIds()
    console.log(finalIds)

    if (finalIds.length === 0) {
      return
    }

    try {
      setIsLoading(true)
      const responseData = await createOrder(finalIds)
      alert("Order successfully created")
      navigate("/order/" + responseData.id)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      label={'Create order'}
      startIcon={<CreateIcon />}
      onClick={handleCreate}
      isLoading={isLoading}
      isDisabled={toFinalIds().length === 0} />
  )
}

