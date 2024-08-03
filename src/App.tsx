import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Login from "./features/authentication/login/Login";
import Signup from "./features/authentication/signup/Signup";
import Homepage from "./ui/Homepage";
import TestingPage from "./pages/TestingPage";
import QuizPage from "./features/Quiz/QuizPage";
import CreateQuiz from "./features/Quiz/CreateQuiz";
import loginAction from "./features/authentication/login/LoginAction";
import AuthProvider from "./features/authentication/AuthContext";

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
			{
				path: "error",
				element: <Link to="/login">Go to Login</Link>,
			},
		],
	},
]);

function App() {
	return (
		<AuthProvider>
			<RouterProvider router={router} />;
		</AuthProvider>
	);
}

export default App;
