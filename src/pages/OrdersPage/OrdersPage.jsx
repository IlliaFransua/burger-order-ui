import { OpenCreateOrderWindowButton } from "@/feautures/open-create-order-window";
import { Stack } from "@/shared/ui/Stack";
import { OrderTableWidget } from "@/widgets/OrderTableWidget";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export const OrdersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterParams = useMemo(
    () => ({
      page: Number(searchParams.get("page")) || 0,
      size: Number(searchParams.get("size")) || 5,
      sort: searchParams.get("sort") || "createdAt",
      desc: searchParams.get("desc") === "true",
    }),
    [searchParams],
  );

  const updateParams = (params) => {
    setSearchParams(
      (prev) => {
        const urlParams = new URLSearchParams(prev);

        Object.entries(params).forEach(([key, value]) => {
          urlParams.set(key, value);
        });

        return urlParams;
      },
      { replace: true },
    );
  };

  return (
    <Stack>
      <h1>All orders</h1>
      <OpenCreateOrderWindowButton />
      <OrderTableWidget
        initialFilterParams={filterParams}
        updateParams={updateParams}
      />
    </Stack>
  );
};
