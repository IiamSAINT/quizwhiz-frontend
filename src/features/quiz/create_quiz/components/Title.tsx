const Title = () => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Title</label>
      <input
        type="text"
        className="w-full border-2 border-blue-400 px-2 py-2 outline-none"
        placeholder="Enter quiz title"
      />
    </div>
  );
};

export default Title;
