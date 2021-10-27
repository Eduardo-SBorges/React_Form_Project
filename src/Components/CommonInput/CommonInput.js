import React from 'react';
import './CommonInput.css';

const CommonInput = ({ label, type, id, placeholder, ...props }) => {
  return (
    <>
      <label className="labels" htmlFor={id}>
        {label}
      </label>
      <input
        className="inputs"
        type={type}
        id={id}
        placeholder={placeholder}
        {...props}
      />
    </>
  );
};

export default CommonInput;
