import React from 'react';
import TabsMenu from './Components/TabsMenu/TabsMenu';
import FirstTab from './ViewTabs/FirstTab/FirstTab';
import SecondTab from './ViewTabs/SecondTab/SecondTab';
import ThirdTab from './ViewTabs/ThirdTab/ThirdTab';
import './App.css';
import SuccessTab from './ViewTabs/SuccessTab/SuccessTab';

const App = () => {
  /* Variables for buttons and tabs' navigation */
  const [topnavigation, settopnavigation] = React.useState(null);
  const [tabName, setTabName] = React.useState('First Tab');
  const [showTab1, setShowTab1] = React.useState(true);
  const [showTab2, setShowTab2] = React.useState(false);
  const [showTab3, setShowTab3] = React.useState(false);
  /* Ending of variables for buttons and tabs' navigation */

  /* Variables for unlocking tabs on inputs completed */
  const [locktab2, setlocktab2] = React.useState(true);
  const [locktab3, setlocktab3] = React.useState(true);
  /* Ending of variables for unlocking tabs on inputs completed */

  /* Starting codes for rendering of tabs using Tabs' clicks */
  const tab1 = (
    <FirstTab
      setlocktab2={setlocktab2}
      setlocktab3={setlocktab3}
      tabsMenu={
        <TabsMenu
          active1
          settopnavigation={settopnavigation}
          locktab2={locktab2}
          locktab3={locktab3}
        />
      }
    />
  );
  const tab2 = (
    <SecondTab
      setlocktab3={setlocktab3}
      tabsMenu={
        <TabsMenu
          active2
          settopnavigation={settopnavigation}
          locktab2={locktab2}
          locktab3={locktab3}
        />
      }
    />
  );
  const tab3 = (
    <ThirdTab
      tabsMenu={
        <TabsMenu
          active3
          settopnavigation={settopnavigation}
          locktab2={locktab2}
          locktab3={locktab3}
        />
      }
    />
  );

  const [tabRender, setTabRender] = React.useState(tab1);

  const setShowTab1_true = () => {
    setShowTab1(true);
    setShowTab2(false);
    setShowTab3(false);
  };
  const setShowTab2_true = () => {
    setShowTab1(false);
    setShowTab2(true);
    setShowTab3(false);
  };
  const setShowTab3_true = () => {
    setShowTab1(false);
    setShowTab2(false);
    setShowTab3(true);
  };
  const setShowSuccessTab = () => {
    setShowTab1(false);
    setShowTab2(false);
    setShowTab3(false);
  };

  React.useEffect(() => {
    if (topnavigation === 'tab1') {
      setTabRender(tab1);
      setTabName('First Tab');
      setShowTab1_true();
    } else if (topnavigation === 'tab2' && !locktab2) {
      setTabRender(tab2);
      setTabName('Second Tab');
      setShowTab2_true();
    } else if (topnavigation === 'tab3' && !locktab3) {
      setTabRender(tab3);
      setTabName('Third Tab');
      setShowTab3_true();
    }
  }, [topnavigation, locktab2, locktab3]);
  /* Ending codes for rendering of tabs using Tabs' clicks */

  /* Starting codes for rendering of tabs using Next Buttons' clicks */
  const handleClick = (e) => {
    e.preventDefault();

    if (showTab1) {
      setTabRender(tab2);
      setTabName('Second Tab');
      settopnavigation('tab2');
      setShowTab2_true();
    } else if (showTab2) {
      setTabRender(tab3);
      setTabName('Third Tab');
      settopnavigation('tab3');
      setShowTab3_true();
    } else if (showTab3) {
      setTabRender(<SuccessTab />);
      setTabName('Success');
      setShowSuccessTab();
    }
  };
  /* Ending codes for rendering of tabs using Next Buttons' clicks */

  return (
    <>
      <header>
        <div className="header-text">
          <h3 className="header-text-1">Forms</h3>
          <h2 className="header-text-2">{tabName}</h2>
        </div>
      </header>
      <main>
        <div className="form-container">
          <form method="post" onSubmit={handleClick}>
            <div className="tab-container">{tabRender}</div>
          </form>
        </div>
      </main>
    </>
  );
};

export default App;
