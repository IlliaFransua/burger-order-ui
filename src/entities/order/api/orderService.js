import { API_ORDER_URL } from "@/shared/api"
import axios from "axios"

export const getPaginatedOrders = (params) => {
  const url = `${API_ORDER_URL}/_list?page=${params.page}&size=${params.size}&sort=${params.sort}${params.desc ? ',desc' : ',asc'}`
  return axios.post(url)
    .then(response => response.data)
    .catch(error => console.log(error))
}

export const findOrder = (id) => axios.get(API_ORDER_URL + '/' + id)
  .then(res => res.data)
  .catch(error => console.log(error))

export const deleteOrder = async (id) => await axios.delete(`${API_ORDER_URL}/${id}`)

