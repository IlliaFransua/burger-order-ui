import { API_ORDER_URL } from "@/shared/api"
import axios from "axios"

export const createOrder = async (burgerIds) => {
  const orderRequest = {
    burgerIds: burgerIds
  }

  const response = await axios.post(API_ORDER_URL, orderRequest)
  return response.data
}

