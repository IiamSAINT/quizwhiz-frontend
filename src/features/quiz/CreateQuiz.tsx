import {
  Form,
  useActionData,
  useNavigation,
  useParams,
} from "react-router-dom";

const CreateQuiz = () => {
  const navigation = useNavigation();
  const errors = useActionData();
  const id = useParams();
  console.log(id);

  const isLoading = navigation.state === "submitting";
  console.log(navigation.state);

  return (
    <div className="flex w-full flex-col items-center py-10">
      {isLoading ? (
        <div className="absolute left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-stone-200 bg-opacity-25 px-16 py-8 backdrop-blur-[3px]">
          <div className="h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-border" />
        </div>
      ) : null}
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
              className="mt-2 rounded-xl border-2 border-border bg-transparent p-2 focus:outline-none"
            />
          </div>

          <div className="mt-8 flex flex-col">
            <label htmlFor="description">Description</label>
            <textarea
              form="createQuizForm"
              name="description"
              placeholder="Enter A Short Description Of Your Quiz"
              className="h-24 border-2 border-border bg-transparent p-2 focus:outline-none"
            ></textarea>
          </div>

          <div className="mt-5">
            <button type="submit" className="rounded-md bg-border px-2 py-2">
              Create Quiz
            </button>
          </div>

          {errors ? (
            <div className="mt-3 border-2 border-red-800 px-2 py-2 text-red-800">
              {errors + ""}
            </div>
          ) : null}
        </div>
      </Form>
    </div>
  );
};

export default CreateQuiz;
