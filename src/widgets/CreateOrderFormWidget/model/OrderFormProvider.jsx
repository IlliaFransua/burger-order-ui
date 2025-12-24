import { CreateOrderButton } from "@/feautures/create-order";
import { Stack } from "@/shared/ui/Stack";
import { createContext, useContext, useMemo, useState } from "react";

const OrderFormContext = createContext(null)

export const OrderFormProvider = ({ children, initialData }) => {
  const [formData, setFormData] = useState(initialData || { burgerIds: [] })

  const updateFields = (fields) => {
    setFormData(prev => ({ ...prev, ...fields }))
  }

  const value = useMemo(() => ({ formData, updateFields }), [formData])

  return (
    <OrderFormContext.Provider value={value}>
      {children}
    </OrderFormContext.Provider>
  )
}

export const useOrderForm = () => useContext(OrderFormContext)
