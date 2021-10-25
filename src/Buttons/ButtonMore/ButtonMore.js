import React from 'react';
import { Plus } from 'react-feather';
import { ChevronRight } from 'react-feather';

const ButtonMore = () => {
  return (
    <button class="btn button-prevent button-more" id="my-button-more">
      <Plus />
      More
      <ChevronRight />
    </button>
  );
};

export default ButtonMore;
