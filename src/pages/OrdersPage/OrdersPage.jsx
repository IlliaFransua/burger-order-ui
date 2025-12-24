import { OpenCreateOrderWindowButton } from "@/feautures/open-create-order-window"
import { Stack } from "@/shared/ui/Stack"
import { OrderTableWidget } from "@/widgets/OrderTableWidget"

export const OrdersPage = () => {
  return (
    <div>
      <h1>All orders</h1>
      <Stack>
        <OpenCreateOrderWindowButton />
        <OrderTableWidget />
      </Stack>
    </div>
  )
}

