import React from 'react';
import './CommonInput.css';

const CommonInput = ({ label, type, id, placeholder, ...props }) => {
  return (
    <>
      <label class="labels" for={id}>
        {label}
      </label>
      <input
        class="inputs"
        type={type}
        id={id}
        placeholder={placeholder}
        {...props}
      />
    </>
  );
};

export default CommonInput;
