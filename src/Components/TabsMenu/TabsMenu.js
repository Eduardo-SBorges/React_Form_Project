import React from 'react';
import './TabsMenu.css';

const TabsMenu = ({ active1, active2, active3, settopnavigation }) => {
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
    active2 = 'desactive';
    active3 = 'desactive';
  } else if (active2) {
    active1 = 'desactive';
    active2 = 'active';
    active3 = 'desactive';
  } else if (active3) {
    active1 = 'desactive';
    active2 = 'desactive';
    active3 = 'active';
  }

  return (
    <>
      <div className="tabs-container">
        <div
          className={`tabs basic ${active1}`}
          onClick={handleClickTab1}
          settopnavigation={settopnavigation}
        >
          <span className="basic_span">Basic</span>
        </div>
        <div
          className={`tabs social ${active2}`}
          onClick={handleClickTab2}
          settopnavigation={settopnavigation}
        >
          <span className="social_span">Social</span>
        </div>
        <div
          className={`tabs certificates ${active3}`}
          onClick={handleClickTab3}
          settopnavigation={settopnavigation}
        >
          <span className="certificates_span">Certificates</span>
        </div>
      </div>
    </>
  );
};

export default TabsMenu;
