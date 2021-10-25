import React from 'react';
import ButtonNext from '../../Components/Buttons/ButtonNext/ButtonNext';
import CommonInput from '../../Components/CommonInput/CommonInput';
import TabsMenu from '../../Components/TabsMenu/TabsMenu';
import Title from '../../Components/Title/Title';
import './SecondTab.css';

const SecondTab = () => {
  return (
    <>
      <section id="second-tab">
        <Title text="Team Sign Up" />
        <TabsMenu
          tab1="Basic"
          tab2="Social"
          active2="active"
          tab3="Certificates"
        />

        <div id="content_2tab">
          <div class="input-block">
            <CommonInput
              type="text"
              label="LinkedIn"
              id="linkedin"
              placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
            />
          </div>

          <div class="input-block">
            <CommonInput
              type="text"
              label="Github *"
              id="github"
              placeholder="https://github.com/example"
              required
            />
            <span id="erroGithub"></span>
          </div>

          <div class="btn-to-right btn-to-down">
            <ButtonNext />
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondTab;
