import React from 'react';
import { ChevronDown } from 'react-feather';

const ButtonCertificates = ({ onClick }) => {
  return (
    <button className="btn" type="button" onClick={onClick}>
      My Certificates
      <ChevronDown />
    </button>
  );
};

export default ButtonCertificates;
