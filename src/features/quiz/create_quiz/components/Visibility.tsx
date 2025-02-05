import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { FormValues } from "@/features/quiz/create_quiz/types";

type VisibilityProps = {
  setValue: UseFormSetValue<FormValues>;
};

const Visibility = ({ setValue }: VisibilityProps) => {
  const [visibility, setVisibility] = useState<"public" | "private">("public");

  const handleVisibilityChange = (value: "public" | "private") => {
    setVisibility(value);
    setValue("visibility", visibility);
  };

  return (
    <div className="gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Visibility
        </label>
        <div className="flex w-full justify-between">
          <div className="flex gap-4">
            <label htmlFor="public">Public</label>
            <input
              type="radio"
              name="public"
              onChange={() => handleVisibilityChange("public")}
            />
          </div>
          <div className="flex gap-4">
            <input
              type="radio"
              name="private"
              onChange={() => handleVisibilityChange("private")}
            />
            <label htmlFor="private">Private</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visibility;
