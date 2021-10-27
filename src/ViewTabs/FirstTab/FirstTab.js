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
  const [birthday, setBirthday] = React.useState({
    day: 0,
    month: 0,
    year: 0,
  });

  const [age, setAge] = React.useState('');
  React.useEffect(() => {
    const birth = new Date(birthday.year, birthday.month - 1, birthday.day);

    if (birthday.year === 0) {
      setAge('');
    } else if (birthday.year !== 0) {
      setAge(
        Math.floor(
          Math.ceil(
            Math.abs(birth.getTime() - new Date().getTime()) /
              (1000 * 3600 * 24),
          ) / 365.25,
        ),
      );
    }
  }, [birthday]);

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
              <SelectDay birthday={birthday} setBirthday={setBirthday} />
            </div>
            <div className="grid-collum four-inputs-by-line">
              <SelectMonth birthday={birthday} setBirthday={setBirthday} />
            </div>
            <div className="grid-collum four-inputs-by-line">
              <SelectYear birthday={birthday} setBirthday={setBirthday} />
            </div>

            <div className="four-inputs-by-line">
              <CommonInput
                type="number"
                label="Age"
                id="age"
                placeholder={age}
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
