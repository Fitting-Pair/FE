import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FittingLayout } from "./layouts";
import { Homepage, LoginPage, SignUpPage } from "./pages";
import { PAGE_PATH } from "@/constants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FittingLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: `${PAGE_PATH.LOGIN}`, element: <LoginPage /> },
      {
        path: `${PAGE_PATH.SIGN_UP}`,
        element: <SignUpPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
