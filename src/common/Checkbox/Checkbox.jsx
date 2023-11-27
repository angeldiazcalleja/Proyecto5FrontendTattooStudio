/* eslint-disable react/prop-types */

import "./Checkbox.css"

const Checkbox = ({ label, checked, onChange }) => {
    return (
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="ageCheckbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor="ageCheckbox">{label}</label>
      </div>
    );
  };

  export default Checkbox