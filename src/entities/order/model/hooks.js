import { useQuery } from "@tanstack/react-query";
import { findOrder } from "../api/orderService";

export const useOrder = (id) => useQuery({
  queryKey: ['order', id],
  queryFn: () => findOrder(id),
  enabled: !!id
})
