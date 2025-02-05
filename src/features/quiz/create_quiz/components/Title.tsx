import { FieldValues, UseFormRegister } from "react-hook-form";

type TitlePropType = {
  register: UseFormRegister<FieldValues>;
};

const Title = ({ register }: TitlePropType) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Title</label>
      <input
        type="text"
        className="w-full border-2 border-blue-400 px-2 py-2 outline-none"
        placeholder="Enter quiz title"
        {...register("title")}
      />
    </div>
  );
};

export default Title;
