import React from 'react';
import '../SelectInputs.css';

const SelectDay = () => {
  const dias = Array.from({ length: 31 }, (a, b) => b + 1);

  return (
    <>
      <label className="labels" htmlFor="day">
        Day
      </label>
      <select className="select" id="day" name="day" required>
        <option value=""></option>
        {dias.map((dia) => {
          return (
            <option key={dia} value={dia}>
              {dia}
            </option>
          );
        })}
        ;
      </select>
    </>
  );
};

export default SelectDay;
