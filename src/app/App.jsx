import { RouterProvider } from "react-router-dom";
import "./styles/global.css";
import { Providers } from "./providers";
import { router } from "./routers";

const App = () => {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
};

export default App;
