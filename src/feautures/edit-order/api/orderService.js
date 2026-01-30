import { API_ORDER_URL, apiClient } from "@/shared/api";

export const updateOrder = async (orderId, burgerIds) => {
  const orderRequest = {
    burgerIds: burgerIds,
  };

  const response = await apiClient.put(
    `${API_ORDER_URL}/${orderId}`,
    orderRequest,
  );
  return response.data;
};
