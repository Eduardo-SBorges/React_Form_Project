import React from 'react';
import './FirstTab.css';
import CommonInput from '../../Components/CommonInput/CommonInput';
import TabsMenu from '../../Components/TabsMenu/TabsMenu';
import Title from '../../Components/Title/Title';
import SelectDay from '../../Components/SelectInputs/SelectDay/SelectDay';
import SelectMonth from '../../Components/SelectInputs/SelectMonth/SelectMonth';
import SelectYear from '../../Components/SelectInputs/SelectYear/SelectYear';
import CheckBox from '../../Components/CheckBox/CheckBox';
import ButtonNext from '../../Components/Buttons/ButtonNext/ButtonNext';

const FirstTab = () => {
  return (
    <>
      <section id="first-tab">
        <Title text="Team Sign Up" />

        <TabsMenu tab1="Basic" tab2="Social" tab3="Certificates" />

        <div id="content_1tab">
          <div class="input-block">
            <CommonInput
              type="text"
              label="Full Name *"
              id="fullname"
              placeholder="Juanito Jones"
              required
            />
            <span id="erroNome"></span>
          </div>

          <div class="input-block">
            <CommonInput
              type="text"
              label="Nickname"
              id="nickname"
              placeholder="Juanito"
            />
          </div>

          <div class="input-block flex-line">
            <div class="medium-input">
              <CommonInput
                type="email"
                label="Email"
                id="email"
                placeholder="for@example.com"
                required
              />
              <span id="erroEmail"></span>
            </div>

            <div class="small-input">
              <CommonInput
                type="text"
                label="Phone"
                id="phone"
                placeholder="(83) 00000-0000"
              />
            </div>
          </div>

          <div>
            <p class="line-title title">
              Birthday *<span id="erroBirthday"></span>
            </p>
          </div>

          <div class="input-block flex-line">
            <div class="grid-collum four-inputs-by-line">
              <SelectDay />
            </div>
            <div class="grid-collum four-inputs-by-line">
              <SelectMonth />
            </div>
            <div class="grid-collum four-inputs-by-line">
              <SelectYear />
            </div>

            <div class="four-inputs-by-line">
              <CommonInput
                type="number"
                label="Age"
                id="age"
                placeholder="0"
                disabled
              />
            </div>
          </div>

          <div id="terms" class="input-block">
            <CheckBox label="I accept the terms and privacy" />
          </div>

          <div class="input-block btn-to-right">
            <ButtonNext />
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstTab;
