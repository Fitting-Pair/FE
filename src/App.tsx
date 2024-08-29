import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FittingLayout } from "./layouts";
import { Homepage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FittingLayout />,
    children: [{ index: true, element: <Homepage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
