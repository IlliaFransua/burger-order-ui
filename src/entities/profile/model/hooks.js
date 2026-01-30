import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../api/userService";

export const useGetProfile = () =>
  useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfile(),
  });
