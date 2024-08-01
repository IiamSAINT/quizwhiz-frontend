import { Navigate, Outlet } from "react-router-dom";
import QuizSidebar from "../../ui/QuizSidebar";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";

function QuizPage() {
	const isLoggedIn = useIsLoggedIn();

	if (isLoggedIn === "loading") return <h1>LOADING</h1>;
	if (!isLoggedIn) return <Navigate to="/" />;

	return (
		<div className="w-11/12 mx-auto flex gap-5">
			<QuizSidebar />
			<Outlet />
		</div>
	);
}

export default QuizPage;
