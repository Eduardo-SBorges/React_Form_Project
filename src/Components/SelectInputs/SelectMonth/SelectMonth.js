import React from 'react';
import '../SelectInputs.css';

const SelectMonth = () => {
  const meses = Array.from({ length: 12 }, (a, b) => b + 1);

  return (
    <>
      <label className="labels" htmlFor="month">
        Month
      </label>
      <select className="select" id="month" name="month" required>
        <option value=""></option>
        {meses.map((mes) => {
          return (
            <option key={mes} value={mes}>
              {mes}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SelectMonth;
