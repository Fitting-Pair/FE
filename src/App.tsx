import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FittingLayout, MyPageLayout, StylingLayout } from "./layouts";
import {
  Homepage,
  LoginPage,
  MobileResultPage,
  ModifyPage,
  MyPage,
  ResultDetail,
  SignUpPage,
  BodyCheckPage,
  StylingPage,
  ResultPage,
  EditPage,
} from "./pages";
import { PAGE_PATH } from "@/constants";
import TestPage from "./pages/test";

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
      {
        path: `${PAGE_PATH.BODY_CHECK}`,
        element: <BodyCheckPage />,
      },
      {
        path: "test",
        element: <TestPage />,
      },
    ],
  },
  {
    path: `/${PAGE_PATH.BODY_CHECK}`,
    element: <StylingLayout />,
    children: [
      {
        path: `${PAGE_PATH.STYLEING}/:imgId`,
        element: <StylingPage />,
      },
      {
        path: `${PAGE_PATH.STYLEING}/${PAGE_PATH.RESULT}/:imgId`,
        element: <ResultPage />,
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
        element: <MobileResultPage />,
      },
      {
        path: `${PAGE_PATH.RESULT}/${PAGE_PATH.DETAIL}/:name`,
        element: <ResultDetail />,
      },
      {
        path: `${PAGE_PATH.MODIFY}/:id`,
        element: <ModifyPage />,
      },
      {
        path: `${PAGE_PATH.EDIT}/:id`,
        element: <EditPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
