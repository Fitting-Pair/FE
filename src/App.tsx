import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FittingLayout, MyPageLayout } from "./layouts";
import {
  Homepage,
  LoginPage,
  MoblieResultPage,
  ModifyPage,
  MyPage,
  ResultDetail,
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
      {
        path: `${PAGE_PATH.RESULT}/${PAGE_PATH.DETAIL}/:name`,
        element: <ResultDetail />,
      },
      {
        path: `${PAGE_PATH.MODIFY}/:id`,
        element: <ModifyPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
