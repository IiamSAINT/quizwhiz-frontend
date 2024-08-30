import { Link, NavLink } from "react-router-dom";
import {
  MdPersonOutline,
  MdOutlineArticle,
  MdLibraryBooks,
  MdAdd,
  MdBarChart,
  MdSettings,
  MdLogout,
} from "react-icons/md";
import { useAuth } from "../features/authentication/AuthContext";

const NavLinkStyle =
  "flex items-center gap-3 rounded-md px-3 py-2 text-lg ring-blue-200 transition-colors duration-200 hover:bg-blue-200 focus:outline-none focus:ring-4";

const NavLinkActiveStyle = " bg-blue-200";

export default function QuizSidebar() {
  const { user } = useAuth();

  return (
    <aside className="flex w-2/12 flex-col border-r-2 px-5 py-8 pb-10">
      <div className="justify-left flex items-center gap-4">
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-[25px] text-slate-700">
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
            className={({ isActive }) => {
              return isActive
                ? NavLinkStyle + NavLinkActiveStyle
                : NavLinkStyle;
            }}
            to="/app/dashboard"
          >
            <MdOutlineArticle />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? NavLinkStyle + NavLinkActiveStyle
                : NavLinkStyle;
            }}
            to="quizz"
          >
            <MdLibraryBooks />
            <span>My Quizzes</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? NavLinkStyle + NavLinkActiveStyle
                : NavLinkStyle;
            }}
            to="createquiz"
          >
            <MdAdd />
            <span>Create Quiz</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? NavLinkStyle + NavLinkActiveStyle
                : NavLinkStyle;
            }}
            to="analytics"
          >
            <MdBarChart />
            <span>Analytics</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? NavLinkStyle + NavLinkActiveStyle
                : NavLinkStyle;
            }}
            to="settings"
          >
            <MdSettings />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>

      <div className="mt-auto">
        <button className="flex items-center justify-center gap-3 rounded-md px-3 py-2 text-lg transition-colors duration-200 hover:bg-blue-200 focus:outline-none focus:ring-4">
          <MdLogout />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
