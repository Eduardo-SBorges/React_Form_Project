import React from 'react';
import './TabsMenu.css';

const TabsMenu = ({ active1, active2, active3, settopnavigation, setname }) => {
  const handleClickTab1 = () => {
    settopnavigation('tab1');
  };

  const handleClickTab2 = () => {
    settopnavigation('tab2');
  };

  const handleClickTab3 = () => {
    settopnavigation('tab3');
  };

  if (active1) {
    active1 = 'active';
  } else if (active2) {
    active2 = 'active';
  } else if (active3) {
    active3 = 'active';
  }

  return (
    <>
      <div className="tabs-container">
        <div className={`tabs basic ${active1}`} onClick={handleClickTab1}>
          <span className="basic_span">Basic</span>
        </div>
        <div className={`tabs social ${active2}`} onClick={handleClickTab2}>
          <span className="social_span">Social</span>
        </div>
        <div
          className={`tabs certificates ${active3}`}
          onClick={handleClickTab3}
        >
          <span className="certificates_span">Certificates</span>
        </div>
      </div>
    </>
  );
};

export default TabsMenu;
