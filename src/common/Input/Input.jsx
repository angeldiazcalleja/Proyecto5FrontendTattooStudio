/* eslint-disable react/prop-types */
import './Input.css'; 

const Inputs = ({ text, type, name,value, isDisabled, handler,functionError }) => {
  return (
    <div className="custom-input-wrapper">
      <input
        type={type}
        name={name}
        placeholder={text}
        value={value}
        onChange={(e) => handler(e)}
        maxLength={50}
        onBlur={(e)=>functionError(e)}
        disabled={isDisabled}
        className={`custom-input ${isDisabled ? 'disabled' : ''}`}
      />
    </div>
  );
};

export default Inputs;



