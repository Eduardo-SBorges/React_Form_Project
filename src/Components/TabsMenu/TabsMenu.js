import React from 'react';
import './TabsMenu.css';

const TabsMenu = ({ tab1, tab2, tab3 }) => {
  return (
    <>
      <div class="tabs-container">
        <div class="tabs basic active">
          <span class="basic_span">{tab1}</span>
        </div>
        <div class="tabs social">
          <span class="social_span">{tab2}</span>
        </div>
        <div class="tabs certificates">
          <span class="certificates_span">{tab3}</span>
        </div>
      </div>
    </>
  );
};

export default TabsMenu;
