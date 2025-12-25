import { Stack } from "@/shared/ui/Stack"
import { CreateOrderButton } from "@/feautures/create-order"
import { BurgersTable, findAllBurgers } from "@/entities/burger"
import { useEffect, useState } from "react"

export const CreateOrderFormWidget = () => {
  const [burgers, setBurgers] = useState([])
  const [selectedRows, setSelectedRows] = useState({ type: 'include', ids: new Set() })

  useEffect(() => {
    findAllBurgers().then(data => setBurgers(data))
  }, [])

  function handleSelectionChange(newSelectionModel) {
    setSelectedRows(newSelectionModel)
  }

  return (
    <Stack>
      <BurgersTable burgers={burgers}
        isEditMode={true}
        selectionModel={selectedRows}
        onSelectionChange={handleSelectionChange} />
      <CreateOrderButton burgers={burgers} selectedRows={selectedRows} />
    </Stack>
  )
}

