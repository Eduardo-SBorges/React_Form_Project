import React from 'react';
import './CertificatesInput.css';
import { Heart } from 'react-feather';

const CertificatesInput = () => {
  return (
    <>
      <label className="labels" htmlFor="certificates">
        Certificates
      </label>
      <div id="input_btn">
        <input
          type="text"
          id="certificates"
          className="input-heart"
          placeholder="https://cursos.alura.com.br/certificate/4ad81d87-33a3-48f4-86ac-5d4e3747b761"
        />
        <button id="btn_heart">
          <Heart />
        </button>
      </div>
    </>
  );
};

export default CertificatesInput;
