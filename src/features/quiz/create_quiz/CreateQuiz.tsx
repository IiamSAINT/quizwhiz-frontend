import CreateQuizFooter from "@/features/quiz/create_quiz/components/CreateQuizFooter";
import CreateQuizHeader from "@/features/quiz/create_quiz/components/CreateQuizHeader";
import QuizDetailsForm from "@/features/quiz/create_quiz/components/QuizDetailsForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValues } from "@/features/quiz/create_quiz/types";

const CreateQuiz = () => {
  const {
    register,
    setValue,
    handleSubmit: hookHandleSubmit,
  } = useForm<FormValues>();

  const handleSubmit: SubmitHandler<FormValues> = function (data) {
    console.log(data);
    // TODO: Validate the quiz details
    // TODO: Create a quiz with react query mutations
  };

  return (
    <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center overflow-hidden bg-[rgba(0,0,0,0.5)] px-40">
      <form
        // Prevent enter key from submitting the form cause the Categories Component uses it (The Enter Key)
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
        // Giving React Hook Form Control of the the handleSubmit function
        onSubmit={hookHandleSubmit(handleSubmit)}
        className="mx-auto flex w-full flex-col gap-4 rounded-xl bg-white p-6 shadow-lg"
      >
        <CreateQuizHeader />
        <QuizDetailsForm register={register} setValue={setValue} />
        <CreateQuizFooter />
      </form>
    </div>
  );
};

export default CreateQuiz;
