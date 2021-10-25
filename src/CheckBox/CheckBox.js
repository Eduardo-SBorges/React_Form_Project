import React from 'react';
import './CheckBox.css';

const CheckBox = ({ label }) => {
  return (
    <label id="terms-label" class="check-terms">
      {label}
      <span id="erroCheckbox"></span>
      <input id="terms-input" type="checkbox" />
      <span id="terms-span" class="checkmark"></span>
    </label>
  );
};

export default CheckBox;
