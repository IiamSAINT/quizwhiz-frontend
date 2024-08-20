import { Outlet } from "react-router-dom";
import QuizSidebar from "../../ui/QuizSidebar";
import useIsLoggedIn from "../authentication/useIsLoggedIn";
import { useAuth } from "../authentication/AuthContext";

function QuizPage() {
  useIsLoggedIn();
  const { isAuthenticated, isLoading } = useAuth();
  console.log(isAuthenticated, isLoading);
  if (isLoading) return <h1>LOADING</h1>;
  if (!isAuthenticated && !isLoading) return <div>Errorrr</div>;
  return (
    <div className="mx-auto flex h-screen gap-5 bg-primary px-5">
      <QuizSidebar />
      <Outlet />
    </div>
  );
}

export default QuizPage;
