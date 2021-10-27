import React from 'react';
import './FirstTab.css';
import CommonInput from '../../Components/CommonInput/CommonInput';
import Title from '../../Components/Title/Title';
import SelectDay from '../../Components/SelectInputs/SelectDay/SelectDay';
import SelectMonth from '../../Components/SelectInputs/SelectMonth/SelectMonth';
import SelectYear from '../../Components/SelectInputs/SelectYear/SelectYear';
import CheckBox from '../../Components/CheckBox/CheckBox';
import ButtonNext from '../../Components/Buttons/ButtonNext/ButtonNext';

const FirstTab = ({ tabsMenu }) => {
  return (
    <>
      <section id="first-tab">
        <Title text="Team Sign Up" />
        {tabsMenu}

        <div id="content_1tab">
          <div className="input-block">
            <CommonInput
              type="text"
              label="Full Name *"
              id="fullname"
              placeholder="Juanito Jones"
              required
            />
            <span id="erroNome"></span>
          </div>

          <div className="input-block">
            <CommonInput
              type="text"
              label="Nickname"
              id="nickname"
              placeholder="Juanito"
            />
          </div>

          <div className="input-block flex-line">
            <div className="medium-input">
              <CommonInput
                type="email"
                label="Email"
                id="email"
                placeholder="for@example.com"
                required
              />
              <span id="erroEmail"></span>
            </div>

            <div className="small-input">
              <CommonInput
                type="text"
                label="Phone"
                id="phone"
                placeholder="(83) 00000-0000"
              />
            </div>
          </div>

          <div>
            <p className="line-title">
              Birthday *<span id="erroBirthday"></span>
            </p>
          </div>

          <div className="input-block flex-line">
            <div className="grid-collum four-inputs-by-line">
              <SelectDay />
            </div>
            <div className="grid-collum four-inputs-by-line">
              <SelectMonth />
            </div>
            <div className="grid-collum four-inputs-by-line">
              <SelectYear />
            </div>

            <div className="four-inputs-by-line">
              <CommonInput
                type="number"
                label="Age"
                id="age"
                placeholder="0"
                disabled
              />
            </div>
          </div>

          <div id="terms" className="input-block">
            <CheckBox label="I accept the terms and privacy" />
            <span id="erroCheckbox"></span>
          </div>

          <div className="input-block btn-to-right">
            <ButtonNext id="tab1" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstTab;
