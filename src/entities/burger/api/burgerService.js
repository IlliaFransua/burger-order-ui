import { API_BURGER_URL, apiClient } from "@/shared/api";

export const createBurger = async ({ name, unitPrice }) => {
  const formatedName = name.trim();
  const formatedUnitPrice =
    typeof unitPrice === "string" ? unitPrice.replace(",", ".") : unitPrice;

  const response = await apiClient.post(API_BURGER_URL, {
    name: formatedName,
    unitPrice: formatedUnitPrice,
  });

  return response.data;
};

export const findAllBurgers = () =>
  apiClient
    .get(API_BURGER_URL)
    .then((response) => response.data)
    .catch((error) => console.log(error));
