import React from 'react';
import '../Buttons.css';
import { ChevronRight } from 'react-feather';

const ButtonNext = ({ id, ...props }) => {
  return (
    <button className="btn" id={id} {...props}>
      Next
      <ChevronRight />
    </button>
  );
};

export default ButtonNext;
