import React from 'react';
import './CommonInput.css';

const CommonInput = ({ label, type, id, placeholder }) => {
  return (
    <>
      <label class="labels" for={id}>
        {label}
      </label>
      <input class="inputs" type={type} id={id} placeholder={placeholder} />
    </>
  );
};

export default CommonInput;
