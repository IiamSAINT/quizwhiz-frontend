import CalloutAlert from "@/components/ui/CalloutAlert";
import { Plus } from "lucide-react";
import CreateQuiz from "@/features/quiz/create_quiz/CreateQuiz";
import { useState } from "react";
const QuizPage = () => {
  const [quizIsOpen, setQuizIsOpen] = useState(false);

  return (
    <>
      {quizIsOpen && <CreateQuiz />}
      <div className="flex w-full flex-col gap-4">
        <header className="flex w-full justify-between">
          <h2 className="text-3xl">My Quizzes</h2>
          <div>
            <button
              onClick={() => {
                setQuizIsOpen((open) => !open);
              }}
              className='relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] border-black px-4 py-2 font-semibold uppercase text-black transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-black before:transition-transform before:duration-1000 before:content-[""] hover:scale-105 hover:text-white hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95'
            >
              <Plus />
              <span>Create Quiz</span>
            </button>
          </div>
        </header>

        <div>
          <input
            type="text"
            className="w-full border bg-white px-2 py-2"
            placeholder="Search Quizzes"
          />
        </div>

        <CalloutAlert />

        {/* TODO make this a different component and fetch the data with react router */}
        <div className="flex items-center justify-center">
          {/* <p className="py-16 text-slate-500">
          No Quizzes Found! Create your first quiz to get started
          </p> */}
          <div className="grid grid-cols-1 gap-6 p-0 md:grid-cols-2 lg:grid-cols-3">
            {"jfjfjfj".split("").map(() => {
              return (
                <div className="group relative rounded-lg bg-white p-6 shadow-md transition-all duration-200 hover:shadow-lg">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-gray-800">
                        JavaScript Fundamentals
                      </h3>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-600">
                        Published
                      </span>
                    </div>
                    <div className="relative">
                      <button className="rounded-full p-1 hover:bg-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-more-vertical h-5 w-5 text-gray-500"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>15 questions</span>
                    <span>Updated 10/03/2024</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizPage;
