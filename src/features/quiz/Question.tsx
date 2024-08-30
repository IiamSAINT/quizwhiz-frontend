import {
  MouseEventHandler,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { produce } from "immer";
import { FaRegEdit } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import Option from "./Option";
import { addQuestion } from "../../services/QuizService";
import { useParams } from "react-router-dom";

const initialState = [
  { answer: "Paris", isCorrect: true, id: crypto.randomUUID() },
  { answer: "Veitnam", isCorrect: false, id: crypto.randomUUID() },
  { answer: "Abuja", isCorrect: false, id: crypto.randomUUID() },
  { answer: "London", isCorrect: false, id: crypto.randomUUID() },
];

const reducer = function (state, action) {
  switch (action.type) {
    case "option/edit": {
      const nextState = produce(state, (draftState) => {
        draftState.find((state) => state.id === action.payload.id).answer =
          action.payload.answer;
      });

      return nextState;
    }

    case "option/toggleCorrect": {
      const nextState = produce(state, (draftState) => {
        draftState.find((state) => state.id === action.payload.id).isCorrect =
          !draftState.find((state) => state.id === action.payload.id).isCorrect;
      });

      return nextState;
    }

    case "option/delete": {
      const nextState = produce(state, (draftState) => {
        draftState.splice(
          draftState.findIndex((state) => state.id === action.payload.id),
          1,
        );
      });
      return nextState;
    }

    case "option/add": {
      const nextState = produce(state, (draftState) => {
        draftState.push({
          id: crypto.randomUUID(),
          answer: "",
          isCorrect: false,
        });
      });

      return nextState;
    }
  }
};

const Question = ({ title, handleSetQuestions, id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);

  const [state, dispatch] = useReducer(reducer, initialState);

  const { id: quizId } = useParams();

  useEffect(() => {
    if (!isDisabled) {
      inputRef.current?.focus();
    }
  }, [isDisabled]);

  const toggleDisabled: MouseEventHandler = function (e) {
    e.preventDefault();
    setIsDisabled((disabled: boolean) => !disabled);
  };

  const handleSubmitQuestion = async function (e) {
    e.preventDefault();
    const question = title;
    const answers = state.map((option) => {
      return {
        answer: option.answer,
        isCorrect: option.isCorrect,
      };
    });
    const body = { question, answers };

    try {
      setIsLoading(true);
      const data = await addQuestion(id, body);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="question rounded-lg border-2 px-5 py-4">
      <div className="header flex w-full items-center justify-between text-lg">
        <input
          placeholder="Input Your Question Here"
          value={title}
          disabled={isDisabled}
          onChange={(e) => {
            handleSetQuestions((questions) => {
              const arr = questions.map((question, i) => {
                if (id === i) {
                  return e.target.value;
                } else return question;
              });
              return arr;
            });
          }}
          className="w-11/12 bg-transparent px-2 ring-border focus:outline-none focus:ring-2"
          ref={inputRef}
        />
        <button className="text-xl" onClick={toggleDisabled}>
          {isDisabled ? <FaRegEdit /> : <IoMdCheckmarkCircleOutline />}
        </button>

        <button
          className="text-2xl"
          onClick={(e) => {
            e.preventDefault();
            handleSetQuestions((questions) => {
              return questions.filter((question, i) => i !== id);
            });
          }}
        >
          <MdDeleteOutline />
        </button>
      </div>

      <div className="options mt-8 flex flex-col gap-5">
        {state.map((option) => (
          <Option option={option} dispatch={dispatch} key={option.id} />
        ))}

        <div className="px-5">
          <button
            className="mx-auto w-full rounded-xl border-2 border-border bg-transparent py-2"
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "option/add" });
            }}
          >
            Add Answer
          </button>
        </div>

        <div className="px-5">
          <button
            className="mx-auto w-full rounded-xl border-2 border-border bg-transparent py-2"
            onClick={handleSubmitQuestion}
          >
            Save Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
