import { Outlet } from "react-router-dom";
import QuizSidebar from "../../ui/QuizSidebar";

function QuizPage() {
  return (
    <div className="w-11/12 mx-auto">
      <QuizSidebar />
      <Outlet />
    </div>
  );
}

export default QuizPage;
