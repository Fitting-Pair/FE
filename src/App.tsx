import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FittingLayout } from "./layouts";
import { Homepage, LoginPage } from "./pages";
import { PAGE_PATH } from "@/constants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FittingLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: `${PAGE_PATH.LOGIN}`, element: <LoginPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
