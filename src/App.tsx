import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./features/login/Login";
import Signup from "./features/signup/Signup";
import Homepage from "./ui/Homepage";
import TestingPage from "./pages/TestingPage";
import QuizPage from "./features/Quiz/QuizPage";
import CreateQuiz from "./features/Quiz/CreateQuiz";
import loginAction from "./features/login/LoginAction";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
	},
	{
		path: "/login",
		element: <Login />,
		action: loginAction,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
	{
		path: "/testing",
		element: <TestingPage />,
	},
	{
		path: "/app",
		element: <QuizPage />,
		children: [
			{
				path: "",
				element: <div>Hello Quiz Home</div>,
			},
			{
				path: "create",
				element: <CreateQuiz />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
