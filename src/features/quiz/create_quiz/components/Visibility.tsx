const Visibility = () => {
  return (
    <div className="gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Visibility
        </label>
        <div className="flex w-full justify-between">
          <div className="flex gap-4">
            <label htmlFor="public">Public</label>
            <input type="radio" name="public" />
          </div>
          <div className="flex gap-4">
            <input type="radio" name="private" />
            <label htmlFor="private">Private</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visibility;
