import { useState, ChangeEvent } from "react";

interface Option {
  text: string;
  isCorrect: boolean;
}

interface Question {
  question: string;
  options: Option[];
}

export default function CreateQuiz() {
  const [noOfQuiz, setNoOfQuiz] = useState<string>("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const handleQuizCountChange = (value: string) => {
    setNoOfQuiz(value);
    const count = parseInt(value, 10);
    const newQuestions = Array.from({ length: count }, () => ({
      question: "",
      options: [
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
      ],
    }));
    setQuestions(newQuestions);
  };

  const handleAddOption = (index: number) => {
    const newQuestions = [...questions];
    newQuestions[index].options.push({ text: "", isCorrect: false });
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (index: number, value: string) => {
    const newQuestions = [...questions];
    newQuestions[index].question = value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (
    questionIndex: number,
    optionIndex: number,
    value: string
  ) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex].text = value;
    setQuestions(newQuestions);
  };

  const handleOptionCheckChange = (
    questionIndex: number,
    optionIndex: number,
    checked: boolean
  ) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options.forEach((option, index) => {
      option.isCorrect = index === optionIndex ? checked : false;
    });
    setQuestions(newQuestions);
    console.log(
      `Question ${questionIndex + 1}, Option ${
        optionIndex + 1
      } isCorrect: ${checked}`
    );
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleSubmit = () => {
    console.log("Quiz Submitted", questions);
  };

  return (
    <div className="w-10/12">
      <form action="" className="mt-5">
        <label htmlFor="noOfQuiz">Enter Number of Quiz:</label>
        <input
          id="noOfQuiz"
          type="number"
          value={noOfQuiz}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleQuizCountChange(e.target.value)
          }
        />

        {questions.length > 0 && (
          <div key={currentQuestionIndex} className="my-32">
            <label
              htmlFor={`question${currentQuestionIndex}`}
              className="block"
            >
              Enter the Question
            </label>
            <input
              type="text"
              className="border-2 block w-full py-2 px-4 outline-none"
              value={questions[currentQuestionIndex].question}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleQuestionChange(currentQuestionIndex, e.target.value)
              }
            />

            <p className="mt-5">Options:</p>
            <div className="grid grid-cols-2 gap-x-20 gap-y-10 mb-10">
              {questions[currentQuestionIndex].options.map((option, j) => (
                <div key={j} className="flex gap-4">
                  <input
                    type="radio"
                    name={`option${currentQuestionIndex}`}
                    id={`option${currentQuestionIndex}${j}`}
                    className="block"
                    checked={option.isCorrect}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleOptionCheckChange(
                        currentQuestionIndex,
                        j,
                        e.target.checked
                      )
                    }
                  />
                  <input
                    type="text"
                    className="border-2 py-1 px-2 block w-full outline-none"
                    value={option.text}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleOptionChange(
                        currentQuestionIndex,
                        j,
                        e.target.value
                      )
                    }
                    id={`option${currentQuestionIndex}${j}`}
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => handleAddOption(currentQuestionIndex)}
              className="bg-blue-500 text-white py-1 px-4 rounded"
            >
              + Add Option
            </button>
          </div>
        )}

        <div className="flex justify-between mt-5">
          {currentQuestionIndex > 0 && (
            <button
              type="button"
              onClick={handlePrev}
              className="bg-gray-500 text-white py-1 px-4 rounded"
            >
              Previous
            </button>
          )}
          {currentQuestionIndex < questions.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-500 text-white py-1 px-4 rounded"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-green-500 text-white py-1 px-4 rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
