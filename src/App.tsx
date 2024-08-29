import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FittingLayout, MyPageLayout } from "./layouts";
import {
  Homepage,
  LoginPage,
  MoblieResultPage,
  MyPage,
  SignUpPage,
} from "./pages";
import { PAGE_PATH } from "@/constants";

const router = createBrowserRouter([
  {
    path: `${PAGE_PATH.BASE}`,
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
  {
    path: `${PAGE_PATH.MY_PAGE}`,
    element: <MyPageLayout />,
    children: [
      {
        path: ":id",
        element: <MyPage />,
      },
      {
        path: `${PAGE_PATH.RESULT}/:id`,
        element: <MoblieResultPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
