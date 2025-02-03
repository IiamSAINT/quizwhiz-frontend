import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Login from "./features/authentication/Login";
import Signup from "./features/authentication/Signup";
import Homepage from "./ui/Homepage";
import TestingPage from "./pages/TestingPage";
import QuizPage from "./features/quiz/QuizPage";
import CreateQuiz from "./features/quiz/CreateQuiz";
import loginAction from "./features/authentication/LoginAction";
import AuthProvider from "./features/authentication/AuthContext";
import signupAction from "./features/authentication/SignupAction";
import createQuizAction from "./features/quiz/createQuizAction";
import AddQuestions from "./features/quiz/AddQuestions";
import MainAppLayout from "./pages/MainAppLayout";
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
    action: signupAction,
  },
  {
    path: "/testing",
    element: <TestingPage />,
  },
  {
    path: "/app",
    element: <MainAppLayout />,
    children: [
      { path: "", element: <div>Hello Home</div> },
      { path: "my_quiz", element: <QuizPage /> },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
