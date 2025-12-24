import { useLocation, useParams } from "react-router-dom";
import { OrderDetailsFormWidget } from "@/widgets/OrderDetailsFormWidget/ui/OrderDetailsFormWidget";
import { useState } from "react";

export const OrderDetailsPage = () => {
  const { orderId } = useParams()
  const { pathname } = useLocation()

  const [isEditMode, setIsEditMode] = useState(pathname.endsWith("/edit"))

  return (
    <div>
      {isEditMode ? <h1>Edit order</h1> : <h1>View order</h1>}
      <OrderDetailsFormWidget orderId={orderId} isEditMode={isEditMode} setIsEditMode={setIsEditMode} />
    </div>
  )
}

