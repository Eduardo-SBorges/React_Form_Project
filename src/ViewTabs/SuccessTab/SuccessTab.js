import React from 'react';
import './SuccessTab.css';
import ButtonClose from '../../Components/Buttons/ButtonClose/ButtonClose';

const SuccessTab = () => {
  return (
    <div className="modal-content">
      <p>Your data has been sent successfully!</p>
      <p>Full Name: {localStorage.getItem('name')}</p>
      {localStorage.getItem('nickname') && (
        <p>Nickname: {localStorage.getItem('nickname')}</p>
      )}
      <p>Email: {localStorage.getItem('email')}</p>
      {localStorage.getItem('phone') && (
        <p>Phone: {localStorage.getItem('phone')}</p>
      )}
      <p>
        Birthday:{' '}
        {`${localStorage.getItem('day')}/${localStorage.getItem(
          'month',
        )}/${localStorage.getItem('year')}
        `}
      </p>
      <p>Age: {localStorage.getItem('age')}</p>
      {localStorage.getItem('linkedin') && (
        <p>Linkedin: {localStorage.getItem('linkedin')}</p>
      )}
      <p>Github: {localStorage.getItem('github')}</p>
      {localStorage.getItem('certificates') && (
        <>
          <p>Certificates:</p>
          <ul>
            <li>{localStorage.getItem('certificates')}</li>
          </ul>
        </>
      )}
      <p>Team Name: {localStorage.getItem('teamname')}</p>
      <p>Institution: {localStorage.getItem('institution')}</p>
      <p>Graduation: {localStorage.getItem('graduation')}</p>
      <div className="btn-to-right">
        <ButtonClose />
      </div>
    </div>
  );
};

export default SuccessTab;
