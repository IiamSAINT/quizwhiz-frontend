import { Outlet } from "react-router-dom";
import QuizSidebar from "../../ui/QuizSidebar";
import useIsLoggedIn from "../authentication/useIsLoggedIn";
import { useAuth } from "../authentication/AuthContext";

function QuizPage() {
	useIsLoggedIn();
	const { isAuthenticated, isLoading } = useAuth();
	if (isLoading) return <h1>LOADING</h1>;
	if (!isAuthenticated && !isLoading) return <div>Errorrr</div>;
	return (
		<div className="w-11/12 mx-auto flex gap-5">
			<QuizSidebar />
			<Outlet />
		</div>
	);
}

export default QuizPage;
