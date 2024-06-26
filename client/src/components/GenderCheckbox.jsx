const GenderCheckbox = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer items-center">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-info border-slate-700"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer items-center">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-info border-slate-700"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
