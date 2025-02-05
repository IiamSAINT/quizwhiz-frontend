import Description from "@/features/quiz/create_quiz/components/Description";
import Category from "@/features/quiz/create_quiz/components/Category";
import Visibility from "@/features/quiz/create_quiz/components/Visibility";
import Title from "@/features/quiz/create_quiz/components/Title";

import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { FormValues } from "@/features/quiz/create_quiz/types";

type QuizDetailsForm = {
  register: UseFormRegister<FormValues>;
  setValue: UseFormSetValue<FormValues>;
};

const QuizDetailsForm = ({ register, setValue }: QuizDetailsForm) => {
  return (
    <div className="space-y-6">
      <Title register={register} />
      <Description register={register} />
      <Category setValue={setValue} />
      <Visibility setValue={setValue} />
    </div>
  );
};

export default QuizDetailsForm;
