import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Admin } from "./pages/Admin";
import { Vote } from "./pages/Vote";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/",
    element: <Vote />,
  },
]);

export const App = () => (
  <div>
    <RouterProvider router={router} />
  </div>
);
