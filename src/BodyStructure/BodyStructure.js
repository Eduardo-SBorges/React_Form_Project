import React from 'react';
import './BodyStructure.css';

const BodyStructure = ({ tabName }) => {
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
            <div class="tab-container">Olá Mundo!</div>
          </form>
        </div>
      </main>
    </>
  );
};

export default BodyStructure;
