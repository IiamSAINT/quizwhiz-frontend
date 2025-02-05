import CreateQuizFooter from "@/features/quiz/create_quiz/components/CreateQuizFooter";
import CreateQuizHeader from "@/features/quiz/create_quiz/components/CreateQuizHeader";
import QuizDetailsForm from "@/features/quiz/create_quiz/components/QuizDetailsForm";
import { useForm } from "react-hook-form";

const CreateQuiz = () => {
  const { register, setValue } = useForm();
  return (
    <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center overflow-hidden bg-[rgba(0,0,0,0.5)] px-40">
      <div className="mx-auto flex w-full flex-col gap-4 rounded-xl bg-white p-6 shadow-lg">
        <CreateQuizHeader />
        <QuizDetailsForm register={register} setValue={setValue} />
        <CreateQuizFooter />
      </div>
    </div>
  );
};

export default CreateQuiz;
