import { Form } from "react-router-dom";
import Question from "./Question";
import { useState } from "react";

const AddQuestions = () => {
  const [questions, setQuestions] = useState(["What is the capital of France"]);
  return (
    <div className="flex w-full flex-col items-center overflow-y-scroll scroll-smooth py-10">
      <Form
        className="flex w-[90%] flex-col justify-between rounded-md border-2 px-16 py-8"
        method="POST"
        name="createQuizForm"
        id="createQuizForm"
      >
        <div>
          <h1 className="text-3xl font-semibold">Questions</h1>
          <p className="mt-1">Add Edit and Order Questions For Your Quiz</p>
        </div>

        <div className="mt-10 flex flex-col gap-20">
          {questions.map((question, id) => (
            <Question
              title={question}
              key={id}
              id={id}
              handleSetQuestions={setQuestions}
            />
          ))}
        </div>

        <div className="mt-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              setQuestions((questions) => [
                ...questions,
                "What Is the capital of France",
              ]);
            }}
            className="rounded-md bg-slate-700 px-3 py-3 text-white"
          >
            Add Question
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AddQuestions;
