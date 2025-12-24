import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { OrderDetailsWidget } from "@/widgets/OrderDetailsFormWidget";

export const OrderDetailsPage = () => {
  const { orderId } = useParams()
  const { pathname } = useLocation()

  const [isEditMode, setIsEditMode] = useState(pathname.endsWith("/edit"))

  return (
    <div>
      {isEditMode ? <h1>Edit order</h1> : <h1>View order</h1>}
      <OrderDetailsWidget orderId={orderId} isEditMode={isEditMode} setIsEditMode={setIsEditMode} />
    </div>
  )
}

