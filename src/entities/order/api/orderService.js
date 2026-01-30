import { API_ORDER_URL, apiClient } from "@/shared/api";

export const getPaginatedOrders = (params) => {
  const url = `${API_ORDER_URL}/_list?page=${params.page}&size=${params.size}&sort=${params.sort}${params.desc ? ",desc" : ",asc"}`;
  return apiClient
    .post(url)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const findOrder = (id) =>
  apiClient
    .get(API_ORDER_URL + "/" + id)
    .then((res) => res.data)
    .catch((error) => console.log(error));

export const deleteOrder = async (id) =>
  await apiClient.delete(`${API_ORDER_URL}/${id}`);
