import { Link, NavLink } from "react-router-dom";
import { MdPersonOutline, MdOutlineArticle } from "react-icons/md";
import { useAuth } from "../features/authentication/AuthContext";

export default function QuizSidebar() {
	const { user } = useAuth();

	return (
		<aside className="w-2/12 pb-10 border-r-2 py-8 px-5">
			<div className="flex gap-4 items-center justify-left">
				<div className="w-[40px] bg-white h-[40px] rounded-full flex items-center justify-center text-[25px] text-slate-700">
					<MdPersonOutline fontSize="inherit" />
				</div>
				<div className="text-sm">
					<p>{user?.name}</p>
					<Link to="/">View Profile</Link>
				</div>
			</div>

			<ul className="mt-10 flex flex-col gap-7">
				<li>
					<NavLink
						className="px-3 py-2 flex items-center  rounded-md hover:bg-blue-200 transition-colors duration-200 focus:outline-none focus:ring-4 ring-blue-200 gap-3 text-lg"
						to="/"
					>
						<MdOutlineArticle />
						<span>Dashboard</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						className="px-3 py-2 flex items-center rounded-md hover:bg-blue-200 transition-colors duration-200 focus:outline-none focus:ring-4 ring-blue-200 gap-3 text-lg"
						to="/quizz"
					>
						My Quizzes
					</NavLink>
				</li>
				<li>
					<NavLink
						className="px-3 py-2 flex items-center rounded-md hover:bg-blue-200 transition-colors duration-200 focus:outline-none focus:ring-4 ring-blue-200 gap-3 text-lg"
						to="/create"
					>
						Create Quiz
					</NavLink>
				</li>
				<li>
					<NavLink
						className="px-3 py-2 flex items-center rounded-md hover:bg-blue-200 transition-colors duration-200 focus:outline-none focus:ring-4 ring-blue-200 gap-3 text-lg"
						to="/analytics"
					>
						Analytics
					</NavLink>
				</li>
				<li>
					<NavLink
						className="px-3 py-2 flex items-center rounded-md hover:bg-blue-200 transition-colors duration-200 focus:outline-none focus:ring-4 ring-blue-200 gap-3 text-lg"
						to="/settings"
					>
						Settings
					</NavLink>
				</li>
			</ul>
		</aside>
	);
}
