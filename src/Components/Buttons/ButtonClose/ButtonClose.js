import React from 'react';
import { XCircle } from 'react-feather';

const ButtonClose = () => {
  return (
    <button className="btn" onClick={() => window.location.reload()}>
      Close
      <XCircle />
    </button>
  );
};

export default ButtonClose;
