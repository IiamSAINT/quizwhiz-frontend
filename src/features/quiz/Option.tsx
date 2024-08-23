import { MdDeleteOutline } from "react-icons/md";

const Option = ({ option, dispatch }) => {
  return (
    <div className="flex items-center justify-start gap-x-2">
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
  );
};

export default Option;
