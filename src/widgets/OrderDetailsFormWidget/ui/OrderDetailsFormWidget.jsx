import { BurgersTable, findAllBurgers } from "@/entities/burger"
import { findOrder } from "@/entities/order"
import { EditOrderButton } from "@/feautures/edit-order"
import { OpenEditOrderWindow } from "@/feautures/open-edit-order-window"
import { OpenOrdersWindow } from "@/feautures/open-orders-window/ui/OpenOrdersWindow"
import { Stack } from "@/shared/ui/Stack"
import { useEffect, useState } from "react"

export const OrderDetailsFormWidget = ({ orderId, isEditMode, setIsEditMode }) => {
  const [orderData, setOrderData] = useState(null)
  const [isOrderDataLoadig, setIsOrderDataLoading] = useState(true)

  const [allAvailableBurgers, setAllAvailableBurgers] = useState([])
  const [selectedRows, setSelectedRows] = useState({ type: 'include', ids: new Set() })

  useEffect(() => {
    findOrder(orderId).then(orderData => {
      setOrderData(orderData)

      if (isEditMode) {
        findAllBurgers().then(allBurgersData => setAllAvailableBurgers(allBurgersData))
        setSelectedRows({
          type: 'include',
          ids: new Set(orderData.burgers.map(burger => burger.id))
        })
      }

      setIsOrderDataLoading(false)
    })
  }, [isEditMode])

  function handleSelectionChange(newSelectionModel) {
    setSelectedRows(newSelectionModel)
  }

  const [isDisabled, setIsDisabled] = useState(true)

  return (
    <div>
      {isOrderDataLoadig ? <h4>Loading...</h4> :
        <Stack>
          <p><b>Id:</b> {orderData.id} {isEditMode ? <b>{'(unmodifiable)'}</b> : null}</p>
          <p><b>Created at:</b> {new Date(orderData.createdAt).toLocaleString()} {isEditMode ? <b>{'(unmodifiable)'}</b> : null}</p>
          <BurgersTable burgers={isEditMode ? allAvailableBurgers : orderData.burgers}
            isEditMode={isEditMode}
            selectionModel={selectedRows}
            onSelectionChange={handleSelectionChange} />
          {isEditMode ?
            <EditOrderButton orderId={orderId}
              isEditMode={isEditMode}
              allAvailableBurgers={allAvailableBurgers}
              selectedRows={selectedRows}
              originalBurgerIds={orderData.burgers.map(burger => burger.id)}
              setIsDisabled={setIsDisabled} />
            : <OpenEditOrderWindow orderId={orderId} />}
          <OpenOrdersWindow orderId={orderId} isDisabled={isDisabled} />
        </Stack>
      }
    </div>
  )
}

