import React from 'react';
import ButtonNext from '../../Components/Buttons/ButtonNext/ButtonNext';
import CommonInput from '../../Components/CommonInput/CommonInput';
import Title from '../../Components/Title/Title';
import './SecondTab.css';

const SecondTab = ({ tabsMenu, setlocktab3 }) => {
  /* Starting variables for faving informations on localStorage */
  const [linkedin, setlinkedin] = React.useState('');
  const [github, setgithub] = React.useState('');

  React.useEffect(() => {
    if (localStorage.getItem('linkedin') !== null) {
      setlinkedin(localStorage.getItem('linkedin'));
    }
    if (localStorage.getItem('github') !== null) {
      setgithub(localStorage.getItem('github'));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('linkedin', linkedin);
    localStorage.setItem('github', github);
    if (!localStorage.getItem('github')) {
      setlocktab3(true);
    } else {
      setlocktab3(false);
    }
  }, [linkedin, github, setlocktab3]);
  /* Ending variables for faving informations on localStorage */
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
              value={linkedin}
              setlinkedin={setlinkedin}
              placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
            />
          </div>

          <div className="input-block">
            <CommonInput
              type="text"
              label="Github *"
              id="github"
              value={github}
              setgithub={setgithub}
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
