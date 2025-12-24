import { BurgersTable, useAllBurgers } from "@/entities/burger"
import { useOrder } from "@/entities/order"
import { EditOrderButton } from "@/feautures/edit-order"
import { OpenEditOrderWindow } from "@/feautures/open-edit-order-window"
import { OpenOrdersWindow } from "@/feautures/open-orders-window/ui/OpenOrdersWindow"
import { Stack } from "@/shared/ui/Stack"
import { useEffect, useState } from "react"

export const OrderDetailsWidget = ({ orderId, isEditMode }) => {
  const { data: order, isLoading } = useOrder(orderId)
  const { data: allBurgers = [] } = useAllBurgers(isEditMode)

  const [selected, setSelected] = useState({ type: 'include', ids: new Set() })
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    if (!isLoading && order && isEditMode) {
      setSelected({
        type: 'include',
        ids: new Set(order.burgers.map(burger => burger.id))
      })
    }
  }, [isLoading, order, isEditMode])

  if (isLoading) {
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
        selectionModel={selected}
        onSelectionChange={setSelected}
      />

      {isEditMode ? (
        <EditOrderButton orderId={orderId}
          isEditMode={isEditMode}
          allAvailableBurgers={allBurgers}
          selectedRows={selected}
          originalBurgerIds={order.burgers.map(burger => burger.id)}
          setIsDisabled={setIsDisabled} />
      ) : (
        <OpenEditOrderWindow orderId={orderId} />
      )}

      <OpenOrdersWindow isEditMode={isEditMode} orderId={orderId} isDisabled={isDisabled} />
    </Stack>
  )
}

