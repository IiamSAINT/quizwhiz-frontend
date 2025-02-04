import Description from "@/features/quiz/create_quiz/components/Description";
import Category from "@/features/quiz/create_quiz/components/Category";
import Visibility from "@/features/quiz/create_quiz/components/Visibility";
import Title from "@/features/quiz/create_quiz/components/Title";

const QuizDetailsForm = () => {
  return (
    <div className="space-y-6">
      <Title />
      <Description />
      <Category />
      <Visibility />
    </div>
  );
};

export default QuizDetailsForm;
