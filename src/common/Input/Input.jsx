/* eslint-disable react/prop-types */
import './Input.css'; 

const Inputs = ({ text, type, name, handler }) => {
  return (
    <div className="custom-input-wrapper">
      <input
        type={type}
        name={name}
        placeholder={text}
        onChange={(e) => handler(e)}
        className="custom-input"
      />
    </div>
  );
};

export default Inputs;



