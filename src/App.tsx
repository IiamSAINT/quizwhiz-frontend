import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./features/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
