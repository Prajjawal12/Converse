// eslint-disable-next-line react/prop-types
const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer items-center ${
            selectedGender === 'male' ? 'selected' : ''
          }`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-info border-slate-700"
            checked={selectedGender === 'male'}
            onChange={() => onCheckboxChange('male')}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer items-center ${
            selectedGender === 'female' ? 'selected' : ''
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-info border-slate-700"
            checked={selectedGender === 'female'}
            onChange={() => onCheckboxChange('female')}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
