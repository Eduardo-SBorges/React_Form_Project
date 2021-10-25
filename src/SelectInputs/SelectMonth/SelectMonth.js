import React from 'react';
import '../SelectInputs.css';

const SelectMonth = () => {
  return (
    <>
      <label class="labels" for="month">
        Month
      </label>
      <select class="select" id="month" name="month" required>
        <option value=""></option>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
    </>
  );
};

export default SelectMonth;
