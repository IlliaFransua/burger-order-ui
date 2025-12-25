import { Stack } from "@/shared/ui/Stack"
import { CreateOrderFormWidget } from "@/widgets/CreateOrderFormWidget"

export const OrderCreatePage = () => {
  return (
    <Stack>
      <h1>New order</h1>
      <CreateOrderFormWidget />
    </Stack>
  )
}

