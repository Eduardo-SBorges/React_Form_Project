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
          if (e.nativeEvent.path[0].id === 'fullname') {
            setname(e.target.value);
          } else if (e.nativeEvent.path[0].id === 'nickname') {
            setnickname(e.target.value);
          } else if (e.nativeEvent.path[0].id === 'email') {
            setemail(e.target.value);
          } else if (e.nativeEvent.path[0].id === 'phone') {
            setphone(e.target.value);
          } else if (e.nativeEvent.path[0].id === 'linkedin') {
            setlinkedin(e.target.value);
          } else if (e.nativeEvent.path[0].id === 'github') {
            setgithub(e.target.value);
          } else if (e.nativeEvent.path[0].id === 'teamName') {
            setteamname(e.target.value);
          } else if (e.nativeEvent.path[0].id === 'institution') {
            setinstitution(e.target.value);
          } else if (e.nativeEvent.path[0].id === 'graduation') {
            setgraduation(e.target.value);
          }
        }}
        {...props}
      />
    </>
  );
};

export default CommonInput;
