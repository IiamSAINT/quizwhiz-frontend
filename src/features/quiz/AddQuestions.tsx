import { Form } from "react-router-dom";
import Question from "./Question";

const AddQuestions = () => {
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

        <div className="mt-10">
          <Question />
        </div>
      </Form>
    </div>
  );
};

export default AddQuestions;
