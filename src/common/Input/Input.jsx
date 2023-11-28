/* eslint-disable react/prop-types */
import './Input.css'; 

const Inputs = ({ text, type, name, handler,functionError }) => {
  return (
    <div className="custom-input-wrapper">
      <input
        type={type}
        name={name}
        placeholder={text}
        onChange={(e) => handler(e)}
        maxLength={50}
        className="custom-input"
        onBlur={(e)=>functionError(e)}
      />
    </div>
  );
};

export default Inputs;



