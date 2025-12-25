import { BurgersTable, useAllBurgers } from "@/entities/burger"
import { useOrder } from "@/entities/order"
import { CancelOrderDetails } from "@/feautures/cancel-order-details"
import { EditOrderButton } from "@/feautures/edit-order"
import { OpenEditOrderWindow } from "@/feautures/open-edit-order-window"
import { Stack } from "@/shared/ui/Stack"
import { useEffect, useState } from "react"

export const OrderDetailsWidget = ({ orderId, isEditMode }) => {
  const { data: order, isLoading: isOrderLoading } = useOrder(orderId)
  const { data: allBurgers = [], isLoading: isBurgersLoading } = useAllBurgers(isEditMode)

  const [selectedBurgers, setSelectedBurgers] = useState({ type: 'include', ids: new Set() })
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    if (isEditMode && !isOrderLoading) {
      setSelectedBurgers({
        type: 'include',
        ids: new Set(order.burgers.map(burger => burger.id))
      })
    }
  }, [isOrderLoading, order?.burgers, isEditMode])

  if (isOrderLoading || (isEditMode && isBurgersLoading)) {
    return <h4>Loading...</h4>
  }

  const orderDate = new Date(order.createdAt).toLocaleString()

  return (
    <Stack>
      <p><b>Id:</b> {order.id} {isEditMode && <b>{'(unmodifiable)'}</b>}</p>
      <p><b>Created at:</b> {orderDate} {isEditMode && <b>{'(unmodifiable)'}</b>}</p>

      <BurgersTable
        burgers={isEditMode ? allBurgers : order.burgers}
        isEditMode={isEditMode}
        selectionModel={selectedBurgers}
        onSelectionChange={setSelectedBurgers}
      />

      {isEditMode ? (
        <EditOrderButton orderId={orderId}
          isEditMode={isEditMode}
          allAvailableBurgers={allBurgers}
          selectedRows={selectedBurgers}
          originalBurgerIds={order.burgers.map(burger => burger.id)}
          setIsDisabled={setIsDisabled} />
      ) : (
        <OpenEditOrderWindow orderId={orderId} />
      )}

      <CancelOrderDetails isEditMode={isEditMode} orderId={orderId} isDisabled={isDisabled} />
    </Stack>
  )
}

