import Description from "@/features/quiz/create_quiz/components/Description";
import Category from "@/features/quiz/create_quiz/components/Category";
import Visibility from "@/features/quiz/create_quiz/components/Visibility";
import Title from "@/features/quiz/create_quiz/components/Title";

import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
type QuizDetailsForm = {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
};

const QuizDetailsForm = ({ register, setValue }: QuizDetailsForm) => {
  return (
    <div className="space-y-6">
      <Title register={register} />
      <Description register={register} />
      <Category setValue={setValue} />
      <Visibility />
    </div>
  );
};

export default QuizDetailsForm;
