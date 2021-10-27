import React from 'react';
import '../SelectInputs.css';

const SelectYear = () => {
  const anos = Array.from(
    { length: 110 },
    (a, b) => b + new Date().getFullYear() - 110,
  );
  return (
    <>
      <label className="labels" htmlFor="year">
        Year
      </label>
      <select className="select" id="year" name="year" required>
        <option value=""></option>
        {anos.map((ano) => {
          return (
            <option key={ano} value={ano}>
              {ano}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SelectYear;
