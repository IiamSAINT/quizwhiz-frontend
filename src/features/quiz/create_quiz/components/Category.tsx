import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const defaultTags = [
  "Tech",
  "Science",
  "Mathematics",
  "School",
  "Javascript",
  "English",
];

import { UseFormSetValue } from "react-hook-form";
import { FormValues } from "@/features/quiz/create_quiz/types";

type CategoryPropType = {
  setValue: UseFormSetValue<FormValues>;
};

const Category = ({ setValue }: CategoryPropType) => {
  const [tagValue, setTagValue] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [displaySuggestion, setDisplaySuggestion] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keeping track of the tags with react hook form
  useEffect(() => {
    setValue("tags", tags);
  }, [tags, setValue]);

  return (
    <div className="relative flex flex-col gap-2">
      <label className="block text-sm font-medium text-gray-700">
        Category
      </label>

      <div className="relative flex w-full">
        {displaySuggestion && (
          <div className="no-scrollbar absolute bottom-0 max-h-48 w-full translate-y-[100%] overflow-scroll rounded-lg bg-white shadow-lg">
            {defaultTags
              .filter(
                (str) =>
                  tagValue.length > 0 &&
                  str.toLowerCase().includes(tagValue.toLowerCase()) &&
                  str.toLowerCase() !== tagValue.toLowerCase(),
              )
              .map((tag, i) => (
                <button
                  key={i}
                  className="block w-full cursor-pointer px-5 py-3 text-left hover:bg-slate-200"
                  onClick={() => {
                    setTagValue(tag);
                    setDisplaySuggestion(false);
                    inputRef.current?.focus();
                  }}
                >
                  {tag}
                </button>
              ))}
          </div>
        )}
        <input
          type="text"
          ref={inputRef}
          className="w-full rounded-md border-2 border-blue-600 px-2 py-2 outline-none"
          onChange={(e) => {
            setTagValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              let tag = tagValue.trim();
              if (tag === "") return;
              tag = tag[0].toUpperCase() + tag.slice(1);
              if (tags.some((t) => t === tag)) return;
              setTags((tags) => [...tags, tag]);
              setTagValue("");
            }
          }}
          onFocus={() => {
            setDisplaySuggestion(true);
          }}
          value={tagValue}
          placeholder="Press Enter to add a tag, e.g JavaScript"
        />
      </div>
      <div className="flex w-full flex-wrap gap-3">
        {tags.map((tag, i) => (
          <div
            key={i}
            className="text-grey-800 relative me-2 flex rounded-md bg-gray-100 p-4 text-sm font-medium dark:text-blue-300"
          >
            {tag}
            <X
              size="1rem"
              className="absolute right-1 top-1 cursor-pointer"
              onClick={() =>
                setTags((tagVals) => tagVals.filter((val) => val !== tag))
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
