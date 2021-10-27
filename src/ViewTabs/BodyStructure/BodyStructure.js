import React from 'react';
import TabsMenu from '../../Components/TabsMenu/TabsMenu';
import FirstTab from '../FirstTab/FirstTab';
import SecondTab from '../SecontTab/SecondTab';
import ThirdTab from '../ThirdTab/ThirdTab';
import './BodyStructure.css';

const BodyStructure = () => {
  const [locktab2, setlocktab2] = React.useState(true);
  const [locktab3, setlocktab3] = React.useState(true);
  const [topnavigation, settopnavigation] = React.useState(null);
  const [tabName, setTabName] = React.useState('First Tab');
  const [showTab1, setShowTab1] = React.useState(true);
  const [showTab2, setShowTab2] = React.useState(false);
  const [showTab3, setShowTab3] = React.useState(false);
  const [tabRender, setTabRender] = React.useState(
    <FirstTab
      tabsMenu={<TabsMenu active1 settopnavigation={settopnavigation} />}
    />,
  );
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

  React.useEffect(() => {
    if (topnavigation === 'tab1') {
      setTabRender(
        <FirstTab
          tabsMenu={<TabsMenu active1 settopnavigation={settopnavigation} />}
        />,
      );
      setTabName('First Tab');
      setShowTab1_true();
    } else if (topnavigation === 'tab2' && !locktab2) {
      setTabRender(
        <SecondTab
          tabsMenu={<TabsMenu active2 settopnavigation={settopnavigation} />}
        />,
      );
      setTabName('Second Tab');
      setShowTab2_true();
    } else if (topnavigation === 'tab3' && !locktab3) {
      setTabRender(
        <ThirdTab
          tabsMenu={<TabsMenu active3 settopnavigation={settopnavigation} />}
        />,
      );
      setTabName('Third Tab');
      setShowTab3_true();
    }
  }, [topnavigation, locktab2, locktab3]);

  const handleClick = (e) => {
    e.preventDefault();

    if (showTab1) {
      setTabRender(
        <SecondTab
          tabsMenu={<TabsMenu active2 settopnavigation={settopnavigation} />}
        />,
      );
      setTabName('Second Tab');
      settopnavigation('tab2');
      setlocktab2(false);
      setShowTab2_true();
    } else if (showTab2) {
      setTabRender(
        <ThirdTab
          tabsMenu={<TabsMenu active3 settopnavigation={settopnavigation} />}
        />,
      );
      setTabName('Third Tab');
      settopnavigation('tab3');
      setlocktab3(false);
      setShowTab3_true();
    } else if (showTab3) {
      setTabRender(
        <ThirdTab
          tabsMenu={<TabsMenu settopnavigation={settopnavigation} />}
        />,
      );
      setTabName('MODAL');
      settopnavigation('tab3');
      setShowTab1(false);
      setShowTab2(false);
      setShowTab3(false);
    }
  };

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

export default BodyStructure;
