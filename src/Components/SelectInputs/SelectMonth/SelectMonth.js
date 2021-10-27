import React from 'react';
import '../SelectInputs.css';

const SelectMonth = ({ birthday, setBirthday }) => {
  const meses = Array.from({ length: 12 }, (a, b) => ++b);

  return (
    <>
      <label className="labels" htmlFor="month">
        Month
      </label>
      <select
        className="select"
        id="month"
        name="month"
        required
        onChange={(e) => setBirthday({ ...birthday, month: e.target.value })}
      >
        <option value=""></option>
        {meses.map((mes) => {
          if (mes < 10) {
            mes = `0${mes}`;
          }
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
