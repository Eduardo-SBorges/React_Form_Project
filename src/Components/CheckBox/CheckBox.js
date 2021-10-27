import React from 'react';
import './CheckBox.css';

const CheckBox = ({ label }) => {
  return (
    <label id="terms-label" className="check-terms">
      {label}
      <span id="erroCheckbox"></span>
      <input id="terms-input" type="checkbox" required />
      <span id="terms-span" className="checkmark"></span>
    </label>
  );
};

export default CheckBox;
