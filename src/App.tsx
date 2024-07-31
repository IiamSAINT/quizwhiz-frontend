import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./features/login/Login";
import Signup from "./features/signup/Signup";
import Homepage from "./features/HomePage/Homepage";
import TestingPage from "./pages/TestingPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
	{
		path: "/app",
		element: <Homepage />,
	},
	{
		path: "/testing",
		element: <TestingPage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
