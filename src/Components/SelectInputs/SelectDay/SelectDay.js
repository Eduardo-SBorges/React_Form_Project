import React from 'react';
import '../SelectInputs.css';

const SelectDay = ({ birthday, setBirthday, setday, value }) => {
  const dias = Array.from({ length: 31 }, (a, b) => ++b);

  return (
    <>
      <label className="labels" htmlFor="day">
        Day
      </label>
      <select
        className="select"
        id="day"
        name="day"
        value={value}
        required
        onChange={(e) => {
          setBirthday({ ...birthday, day: e.target.value });
          setday(e.target.value);
        }}
      >
        <option value=""></option>
        {dias.map((dia) => {
          if (dia < 10) {
            dia = `0${dia}`;
          }
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
