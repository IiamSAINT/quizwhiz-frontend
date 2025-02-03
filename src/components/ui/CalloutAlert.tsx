import { Info } from "lucide-react";
import { useState } from "react";

// Extend compoenets if need arises.. i.e make it reusable
const CalloutAlert = () => {
  const [show, setShow] = useState(true);

  if (show)
    return (
      <div className="gap-3 border-l-4 border-l-blue-700 bg-blue-50 px-5 py-5 text-blue-700">
        <div className="flex gap-5">
          <span>
            <Info />
          </span>

          <div className="flex flex-col gap-2">
            <p>
              Welcome to Quiz Manager! Create your first quiz by clicking the
              "Create Quiz" button above.
            </p>
            <button className="block w-fit" onClick={() => setShow(false)}>
              Got it
            </button>
          </div>
        </div>
      </div>
    );

  return null;
};

export default CalloutAlert;
