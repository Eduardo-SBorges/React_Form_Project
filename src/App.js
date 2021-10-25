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
import ThirdTab from './ViewTabs/ThirdTab/ThirdTab';

const App = () => {
  return (
    <>
      <BodyStructure tabName="First" tabRender={<FirstTab />} />
    </>
  );
};

export default App;
/* Age Calculator */
