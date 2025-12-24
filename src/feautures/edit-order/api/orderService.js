import { API_ORDER_URL } from "@/shared/api"
import axios from "axios"

export const updateOrder = async (orderId, burgerIds) => {
  const orderRequest = {
    burgerIds: burgerIds
  }

  const response = await axios.put(`${API_ORDER_URL}/${orderId}`, orderRequest)
  return response.data
}

