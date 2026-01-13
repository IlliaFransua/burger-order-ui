import { useQuery } from "@tanstack/react-query";
import { findOrder, getPaginatedOrders } from "../api/orderService";

export const useOrder = (id) =>
  useQuery({
    queryKey: ["order", id],
    queryFn: () => findOrder(id),
    enabled: !!id,
  });

export const usePaginatedOrders = (params) =>
  useQuery({
    queryKey: ["orders", params],
    queryFn: () => getPaginatedOrders(params),
    staleTime: 0,
    gcTime: 0,
  });
