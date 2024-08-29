import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FittingLayout } from "./layouts";
import { BodyCheckPage, Homepage, LoginPage, SignUpPage } from "./pages";
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
      {
        path: `${PAGE_PATH.BODY_CHECK}`,
        element: <BodyCheckPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
