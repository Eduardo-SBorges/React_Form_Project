import React from 'react';
import './CheckBox.css';

const CheckBox = ({ label, value, checked, setchecked }) => {
  return (
    <label id="terms-label" className="check-terms">
      {label}
      <input
        id="terms-input"
        type="checkbox"
        value={value}
        onChange={(e) => {
          if (checked === '') {
            setchecked('checked');
          } else {
            setchecked('');
          }
        }}
        checked={checked}
        required
      />
      <span id="terms-span" className="checkmark"></span>
    </label>
  );
};

export default CheckBox;
