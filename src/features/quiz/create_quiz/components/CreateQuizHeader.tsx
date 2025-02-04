const CreateQuizHeader = () => {
  return (
    <div className="mb-8">
      <div className="mb-2 flex justify-between">
        <div className="flex-1 text-center text-blue-600">Quiz Details</div>
        <div className="flex-1 text-center text-gray-400">Questions</div>
        <div className="flex-1 text-center text-gray-400">Review</div>
      </div>
      <div className="h-2 rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-300"
          style={{ width: "0%" }}
        ></div>
      </div>
    </div>
  );
};

export default CreateQuizHeader;
