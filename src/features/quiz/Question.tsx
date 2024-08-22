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
const Question = () => {
  const [editTitle, setEditTitle] = useState("What is the capital of france");
  const [isDisabled, setIsDisabled] = useState(true);

  const [state, dispatch] = useReducer(reducer, initialState);

  const inputRef = useRef<HTMLInputElement>(null);

  const toggleDisabled: MouseEventHandler = function (e) {
    e.preventDefault();
    setIsDisabled((disabled: boolean) => !disabled);
  };

  useEffect(() => {
    if (!isDisabled) {
      inputRef.current?.focus();
    }
  }, [isDisabled]);
  return (
    <div className="question rounded-lg border-2 px-5 py-4">
      <div className="header flex w-10/12 items-center justify-around text-lg">
        <input
          placeholder="What is the captial of france"
          value={editTitle}
          disabled={isDisabled}
          onChange={(e) => setEditTitle(e.target.value)}
          className="w-11/12 bg-transparent px-2 ring-border focus:outline-none focus:ring-2"
          ref={inputRef}
        />
        <button className="text-xl" onClick={toggleDisabled}>
          {isDisabled ? <FaRegEdit /> : <IoMdCheckmarkCircleOutline />}
        </button>
      </div>

      <div className="options mt-8 flex flex-col gap-5">
        {state.map((option) => (
          <div
            className="flex items-center justify-start gap-x-2"
            key={option.id}
          >
            <input
              type="checkbox"
              name="option1"
              className="block rounded"
              checked={option.isCorrect}
              onChange={() => {
                dispatch({
                  type: "option/toggleCorrect",
                  payload: { id: option.id },
                });
              }}
            />
            <input
              type="text"
              className="w-10/12 rounded-2xl border-2 border-border bg-transparent px-3 py-2 focus:outline-none"
              defaultValue={option.answer}
              onChange={(e) => {
                dispatch({
                  type: "option/edit",
                  payload: { id: option.id, answer: e.target.value },
                });
              }}
            />
            <button
              className="text-2xl"
              onClick={(e) => {
                e.preventDefault();
                dispatch({ type: "option/delete", payload: { id: option.id } });
              }}
            >
              <MdDeleteOutline />
            </button>
          </div>
        ))}

        <div className="px-5">
          <button
            className="mx-auto w-1/2 rounded-xl border-2 border-border bg-transparent py-1"
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "option/add" });
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
