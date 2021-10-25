import React from 'react';
import Title from './Components/Title/Title';
import ButtonNext from './Components/Buttons/ButtonNext/ButtonNext';
import ButtonMore from './Components/Buttons/ButtonMore/ButtonMore';
import ButtonFinish from './Components/Buttons/ButtonFinish/ButtonFinish';
import CommonInput from './Components/CommonInput/CommonInput';
import SelectDay from './Components/SelectInputs/SelectDay/SelectDay';
import SelectMonth from './Components/SelectInputs/SelectMonth/SelectMonth';
import SelectYear from './Components/SelectInputs/SelectYear/SelectYear';
import CheckBox from './Components/CheckBox/CheckBox';
import TabsMenu from './Components/TabsMenu/TabsMenu';
import CertificatesInput from './Components/CertificatesInput/CertificatesInput';
import BodyStructure from './ViewTabs/BodyStructure/BodyStructure';
import FirstTab from './ViewTabs/FirstTab/FirstTab';
import SecondTab from './ViewTabs/SecontTab/SecondTab';

const App = () => {
  return (
    <>
      {/* <Title text="Team Sign Up" /> */}
      {/* <ButtonNext /> */}
      {/* <ButtonMore /> */}
      {/* <ButtonFinish /> */}
      {/* <CheckBox label="I accept the terms and privacy" /> */}
      {/* <SelectDay /> */}
      {/* <SelectMonth /> */}
      {/* <SelectYear /> */}
      {/* <CommonInput label="Nome" type="text" id="nome" placeholder="Juanito" /> */}
      {/* <TabsMenu tab1="Basic" tab2="Social" tab3="Certificates" /> */}
      {/* <CertificatesInput /> */}
      <BodyStructure tabName="First Tab" tabRender={<SecondTab />} />
    </>
  );
};

export default App;
/* Age Calculator */
