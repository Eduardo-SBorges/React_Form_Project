import React from 'react';
import ButtonFinish from './Buttons/ButtonFinish/ButtonFinish';
import ButtonMore from './Buttons/ButtonMore/ButtonMore';
import ButtonNext from './Buttons/ButtonNext/ButtonNext';
import CheckBox from './CheckBox/CheckBox';
import Title from './Title/Title';
import SelectDay from './SelectInputs/SelectDay/SelectDay';
import SelectMonth from './SelectInputs/SelectMonth/SelectMonth';
import SelectYear from './SelectInputs/SelectYear/SelectYear';

const App = () => {
  return (
    <>
      {/* <Title text="Team Sign Up" /> */}
      {/* <ButtonNext /> */}
      {/* <ButtonMore /> */}
      {/* <ButtonFinish /> */}
      {/* <CheckBox label="I accept the terms and privacy" /> */}
      <SelectDay />
      <SelectMonth />
      <SelectYear />
    </>
  );
};

export default App;
