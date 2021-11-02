import React from 'react';
import { Check } from 'react-feather';

const ButtonFinish = ({ id, ...props }) => {
  return (
    <button className="btn" id={id} {...props}>
      Finish
      <Check />
    </button>
  );
};

export default ButtonFinish;
