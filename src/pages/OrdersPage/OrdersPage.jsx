import { OpenCreateOrderWindowButton } from "@/feautures/open-create-order-window"
import { Stack } from "@/shared/ui/Stack"
import { OrderTableWidget } from "@/widgets/OrderTableWidget"

export const OrdersPage = () => {
  return (
    <Stack>
      <h1>All orders</h1>
      <OpenCreateOrderWindowButton />
      <OrderTableWidget />
    </Stack>
  )
}

