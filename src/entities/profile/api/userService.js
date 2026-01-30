import { apiClient } from "@/shared/api";
import { API_PROFILE_URL } from "@/shared/api/urls";

export const getProfile = () =>
  apiClient
    .get(API_PROFILE_URL)
    .then((response) => response.data)
    .catch((error) => console.log(error));
