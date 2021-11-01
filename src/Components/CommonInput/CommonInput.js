import React from 'react';
import './CommonInput.css';

const CommonInput = ({
  label,
  type,
  id,
  value,
  placeholder,
  setname,
  setnickname,
  setemail,
  setphone,
  setlinkedin,
  setgithub,
  setteamname,
  setinstitution,
  setgraduation,
  ...props
}) => {
  return (
    <>
      <label className="labels" htmlFor={id}>
        {label}
      </label>
      <input
        className="inputs"
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          if (e.target.id === 'fullname') {
            setname(e.target.value);
          } else if (e.target.id === 'nickname') {
            setnickname(e.target.value);
          } else if (e.target.id === 'email') {
            setemail(e.target.value);
          } else if (e.target.id === 'phone') {
            setphone(e.target.value);
          } else if (e.target.id === 'linkedin') {
            setlinkedin(e.target.value);
          } else if (e.target.id === 'github') {
            setgithub(e.target.value);
          } else if (e.target.id === 'teamName') {
            setteamname(e.target.value);
          } else if (e.target.id === 'institution') {
            setinstitution(e.target.value);
          } else if (e.target.id === 'graduation') {
            setgraduation(e.target.value);
          }
        }}
        {...props}
      />
    </>
  );
};

export default CommonInput;
