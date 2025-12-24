import { API_ORDER_URL } from "@/shared/api"
import axios from "axios"

export const getPaginatedOrders = ({ page = 0, size = 5, sortField = 'createdAt', isDesc = true } = {}) => {
  const url = `${API_ORDER_URL}/_list?page=${page}&size=${size}&sort=${sortField}${isDesc ? ',desc' : ',asc'}`
  return axios.post(url)
    .then(response => response.data)
    .catch(error => console.log(error))
}

export const findOrder = (id) => axios.get(API_ORDER_URL + '/' + id)
  .then(res => res.data)
  .catch(error => console.log(error))

export const deleteOrder = (id) => axios.delete(`${API_ORDER_URL}/${id}`)

