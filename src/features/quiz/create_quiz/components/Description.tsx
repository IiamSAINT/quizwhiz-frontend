import { FieldValues, UseFormRegister } from "react-hook-form";

type DescriptionPropType = {
  register: UseFormRegister<FieldValues>;
};

const Description = ({ register }: DescriptionPropType) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Description
      </label>
      <textarea
        className="w-full border-2 border-blue-400 px-2 py-2 outline-none"
        rows={3}
        placeholder="Describe your quiz"
        {...register("description")}
      ></textarea>
    </div>
  );
};

export default Description;
