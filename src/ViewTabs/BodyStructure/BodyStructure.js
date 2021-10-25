import React from 'react';
import FirstTab from '../FirstTab/FirstTab';
import './BodyStructure.css';

const BodyStructure = ({ tabName, tabRender }) => {
  return (
    <>
      <header>
        <div class="header-text">
          <h3 class="header-text-1">Forms</h3>
          <h2 class="header-text-2">{tabName}</h2>
        </div>
      </header>
      <main>
        <div class="form-container">
          <form method="post">
            <div class="tab-container">{tabRender}</div>
          </form>
        </div>
      </main>
    </>
  );
};

export default BodyStructure;
