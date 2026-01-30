import { API_ORDER_URL, apiClient } from "@/shared/api";

export const createOrder = async (burgerIds) => {
  const orderRequest = {
    burgerIds: burgerIds,
  };

  const response = await apiClient.post(API_ORDER_URL, orderRequest);
  return response.data;
};
