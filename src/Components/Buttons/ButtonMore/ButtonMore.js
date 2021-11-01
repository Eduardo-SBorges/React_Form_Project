import React from 'react';
import { Plus } from 'react-feather';
import { ChevronRight } from 'react-feather';

const ButtonMore = ({ id, onClick, ...props }) => {
  return (
    <button
      className="btn button-prevent button-more"
      type="button"
      id={id}
      onClick={onClick}
      {...props}
    >
      <Plus />
      More
      <ChevronRight />
    </button>
  );
};

export default ButtonMore;
