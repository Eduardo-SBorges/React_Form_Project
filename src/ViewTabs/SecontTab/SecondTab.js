import React from 'react';
import ButtonNext from '../../Components/Buttons/ButtonNext/ButtonNext';
import CommonInput from '../../Components/CommonInput/CommonInput';
import Title from '../../Components/Title/Title';
import './SecondTab.css';

const SecondTab = ({ tabsMenu }) => {
  return (
    <>
      <section id="second-tab">
        <Title text="Team Sign Up" />

        {tabsMenu}

        <div id="content_2tab">
          <div className="input-block">
            <CommonInput
              type="text"
              label="LinkedIn"
              id="linkedin"
              placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
            />
          </div>

          <div className="input-block">
            <CommonInput
              type="text"
              label="Github *"
              id="github"
              placeholder="https://github.com/example"
              required
            />
            <span id="erroGithub"></span>
          </div>

          <div className="btn-to-right btn-to-down">
            <ButtonNext id="tab2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondTab;
