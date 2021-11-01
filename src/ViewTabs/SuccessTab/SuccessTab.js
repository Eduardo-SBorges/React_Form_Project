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
      {localStorage.getItem('certificatesList') && (
        <>
          <p>Certificates:</p>
          <ul>
            {localStorage
              .getItem('certificatesList')
              .split(',')
              .map((certificate, index) => (
                <li key={index}>{certificate}</li>
              ))}
          </ul>
        </>
      )}
      <p>Team Name: {localStorage.getItem('teamname')}</p>
      <p>Institution: {localStorage.getItem('institution')}</p>
      <p>Graduation: {localStorage.getItem('graduation')}</p>
      <div className="btn-to-right btn-close">
        <ButtonClose />
      </div>
    </div>
  );
};

export default SuccessTab;
