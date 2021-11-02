import React from 'react';
import { mask } from 'remask';
import './FirstTab.css';
import CommonInput from '../../Components/CommonInput/CommonInput';
import Title from '../../Components/Title/Title';
import SelectDay from '../../Components/SelectInputs/SelectDay/SelectDay';
import SelectMonth from '../../Components/SelectInputs/SelectMonth/SelectMonth';
import SelectYear from '../../Components/SelectInputs/SelectYear/SelectYear';
import CheckBox from '../../Components/CheckBox/CheckBox';
import ButtonNext from '../../Components/Buttons/ButtonNext/ButtonNext';

const FirstTab = ({ tabsMenu, setlocktab2, setlocktab3 }) => {
  /* Starting codes for auto age calculation */

  const [age, setage] = React.useState('');
  const [birthday, setBirthday] = React.useState({
    day: 0,
    month: 0,
    year: 0,
  });

  React.useEffect(() => {
    const birth = new Date(birthday.year, birthday.month - 1, birthday.day);
    if (birthday.year === 0) {
      setage('');
    } else if (birthday.year !== 0) {
      setage(
        Math.floor(
          Math.ceil(
            Math.abs(birth.getTime() - new Date().getTime()) /
              (1000 * 3600 * 24),
          ) / 365.25,
        ),
      );
    }
  }, [birthday]);
  /* Ending codes for auto age calculation */

  /* Starting variables for faving informations on localStorage */
  const [name, setname] = React.useState('');
  const [nickname, setnickname] = React.useState('');
  const [email, setemail] = React.useState('');
  const [phone, setphone] = React.useState('');
  const [day, setday] = React.useState('');
  const [month, setmonth] = React.useState('');
  const [year, setyear] = React.useState('');
  const [checked, setchecked] = React.useState('');

  React.useEffect(() => {
    if (localStorage.getItem('name') !== null) {
      setname(localStorage.getItem('name'));
    }
    if (localStorage.getItem('nickname') !== null) {
      setnickname(localStorage.getItem('nickname'));
    }
    if (localStorage.getItem('email') !== null) {
      setemail(localStorage.getItem('email'));
    }
    if (localStorage.getItem('phone') !== null) {
      setphone(localStorage.getItem('phone'));
    }
    if (localStorage.getItem('day') !== null) {
      setday(localStorage.getItem('day'));
    }
    if (localStorage.getItem('month') !== null) {
      setmonth(localStorage.getItem('month'));
    }
    if (localStorage.getItem('year') !== null) {
      setyear(localStorage.getItem('year'));
    }
    if (localStorage.getItem('age') !== null) {
      setage(localStorage.getItem('age'));
    }
    if (localStorage.getItem('checked') !== null) {
      setchecked(localStorage.getItem('checked'));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('name', name);
    localStorage.setItem('nickname', nickname);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('day', day);
    localStorage.setItem('month', month);
    localStorage.setItem('year', year);
    localStorage.setItem('age', age);
    localStorage.setItem('checked', checked);

    if (
      !localStorage.getItem('name') ||
      !localStorage.getItem('email') ||
      !localStorage.getItem('day') ||
      !localStorage.getItem('month') ||
      !localStorage.getItem('year') ||
      !localStorage.getItem('age') ||
      !localStorage.getItem('checked')
    ) {
      setlocktab2(true);
    } else {
      setlocktab2(false);
    }
    if (!localStorage.getItem('github')) {
      setlocktab3(true);
    }
  }, [
    name,
    nickname,
    email,
    phone,
    day,
    month,
    year,
    age,
    checked,
    setlocktab2,
  ]);
  /* Ending variables for faving informations on localStorage */
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
              value={name}
              placeholder="Juanito Jones"
              setname={setname}
              required
            />
          </div>

          <div className="input-block">
            <CommonInput
              type="text"
              label="Nickname"
              id="nickname"
              value={nickname}
              placeholder="Juanito"
              setnickname={setnickname}
            />
          </div>

          <div className="input-block flex-line">
            <div className="medium-input">
              <CommonInput
                type="email"
                label="Email *"
                id="email"
                value={email}
                placeholder="for@example.com"
                setemail={setemail}
                required
              />
            </div>

            <div className="small-input">
              <CommonInput
                type="text"
                label="Phone"
                id="phone"
                value={mask(phone, ['(99) 99999-9999'])}
                placeholder="(83) 00000-0000"
                setphone={setphone}
              />
            </div>
          </div>

          <div>
            <p className="line-title">Birthday *</p>
          </div>

          <div className="input-block flex-line">
            <div className="grid-collum four-inputs-by-line">
              <SelectDay
                birthday={birthday}
                setBirthday={setBirthday}
                day={day}
                value={day}
                setday={setday}
              />
            </div>
            <div className="grid-collum four-inputs-by-line">
              <SelectMonth
                birthday={birthday}
                setBirthday={setBirthday}
                month={month}
                value={month}
                setmonth={setmonth}
              />
            </div>
            <div className="grid-collum four-inputs-by-line">
              <SelectYear
                birthday={birthday}
                setBirthday={setBirthday}
                year={year}
                value={year}
                setyear={setyear}
              />
            </div>

            <div className="four-inputs-by-line">
              <CommonInput
                type="number"
                label="Age"
                id="age"
                value={age}
                disabled
              />
            </div>
          </div>

          <div id="terms" className="input-block">
            <CheckBox
              label="I accept the terms and privacy"
              setchecked={setchecked}
              checked={checked}
            />
          </div>

          <div className="input-block  btn-to-right">
            <ButtonNext id="tab1" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstTab;
