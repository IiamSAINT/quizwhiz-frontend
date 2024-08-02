import { NavLink } from "react-router-dom";
import { useAuth } from "../features/authentication/AuthContext";

export default function QuizSidebar() {
	const { user } = useAuth();

	return (
		<aside className="w-2/12 bg-blue-600 pb-10">
			<div className="text-center font-cabin bg-blue-600 py-5 rounded-b-2xl">
				<img
					src="src\assets\images\hero-test.jpg"
					alt=""
					className="w-24 h-24 rounded-full object-cover object-center mx-auto mb-5"
				/>
				<h1 className="text-2xl font-bold">Name {user.name}</h1>
				<p>Email {user.email}</p>
			</div>
			<ul className="sidebar mt-5">
				<NavLink
					to="/app"
					className="block py-3 ps-4 rounded-s-full ms-4 active:bg-slate-600"
				>
					Home
				</NavLink>
				<NavLink
					to="/app/create"
					className="block py-3 ps-4 rounded-s-full ms-4"
				>
					Create Quiz
				</NavLink>
				<NavLink to="/" className="block py-3 ps-4 rounded-s-full ms-4">
					Home
				</NavLink>
				<NavLink to="/" className="block py-3 ps-4 rounded-s-full ms-4">
					Home
				</NavLink>
			</ul>
		</aside>
	);
}
