import { Form } from "react-router-dom";

const CreateQuiz = () => {
  return (
    <div className="flex w-full flex-col items-center py-10">
      <Form
        className="flex w-[90%] flex-col justify-between rounded-md border-2 px-16 py-8"
        method="POST"
        name="createQuizForm"
        id="createQuizForm"
      >
        <div>
          <h1 className="text-3xl font-semibold">Create Quiz</h1>
          <p>Fill out the form below to create a new quiz</p>
        </div>

        <div className="mt-14">
          <div className="flex flex-col">
            <label htmlFor="title">Quiz Title</label>
            <input
              type="text"
              name="title"
              id=""
              placeholder="Enter Your quiz title here"
              className="border-border mt-2 rounded-xl border-2 bg-transparent p-2 focus:outline-none"
            />
          </div>

          <div className="mt-8 flex flex-col">
            <label htmlFor="description">Description</label>
            <textarea
              form="createQuizForm"
              name="description"
              placeholder="Enter A Short Description Of Your Quiz"
              className="border-border h-24 border-2 bg-transparent p-2 focus:outline-none"
            ></textarea>
          </div>

          <div className="mt-5">
            <button type="submit" className="bg-border rounded-md px-2 py-2">
              Create Quiz
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CreateQuiz;
