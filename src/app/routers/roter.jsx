import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { OrdersPage } from "@/pages/OrdersPage";
import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts";
import { OrderDetailsPage } from "@/pages/OrderDetailsPage";
import { OrderCreatePage } from "@/pages/OrderCreatePage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'order',
        children: [
          { index: true, element: <OrdersPage /> },
          { path: 'create', element: <OrderCreatePage /> },        // create
          { path: ':orderId', element: <OrderDetailsPage /> },      // view
          { path: ':orderId/edit', element: <OrderDetailsPage /> }, // edit
        ]
      },
      { path: '*', element: <NotFoundPage /> },
    ]
  }
]);
