import { Outlet } from "react-router-dom";
import QuizSidebar from "../../ui/QuizSidebar";
import useIsLoggedIn from "../authentication/useIsLoggedIn";
import { useAuth } from "../authentication/AuthContext";
import Loader from "../../ui/Loader";

function QuizPage() {
  useIsLoggedIn();
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return <Loader />;
  if (!isAuthenticated && !isLoading) return <div>Errorrr</div>;
  return (
    <div className="relative mx-auto flex h-screen gap-5 bg-primary pl-5">
      <QuizSidebar />
      <Outlet />
    </div>
  );
}

export default QuizPage;
