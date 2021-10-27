import React from 'react';
import ButtonFinish from '../../Components/Buttons/ButtonFinish/ButtonFinish';
import ButtonMore from '../../Components/Buttons/ButtonMore/ButtonMore';
import CertificatesInput from '../../Components/CertificatesInput/CertificatesInput';
import CommonInput from '../../Components/CommonInput/CommonInput';
import Title from '../../Components/Title/Title';
import './ThirdTab.css';

const ThirdTab = ({ tabsMenu }) => {
  return (
    <>
      <section id="third-tab">
        <Title text="Team Sign Up" />

        {tabsMenu}

        <div id="content_3tab">
          <div id="entry-certificates" className="input-block div-heart">
            <CertificatesInput />
          </div>
          <div className="input-block btn-space-between btn-more">
            <div className="certificates-list">
              <ul className="certificates-ul">
                <li className="certificates-opt hide">
                  <span className="certificates-span">Certificates</span>
                  <i data-feather="chevron-down"></i>
                </li>
                <div className="certificates-added hide">
                  <div className="certificates-favorite"></div>
                  <div className="certificates-normal"></div>
                </div>
              </ul>
            </div>
            <div className="prevent-align-flex-start">
              <ButtonMore />
            </div>
          </div>

          <div className="input-block">
            <CommonInput
              type="text"
              label="Team Name *"
              id="teamName"
              placeholder="My Teams Name"
              required
            />
            <span id="erroTeamName"></span>
          </div>

          <div className="input-block">
            <CommonInput
              type="text"
              label="Institution *"
              id="institution"
              placeholder="Universidade Federal da Paraíba"
              required
            />
            <span id="erroInstitution"></span>
          </div>

          <div className="input-block">
            <CommonInput
              type="text"
              label="Graduation *"
              id="graduation"
              placeholder="Ciência da Computação"
              required
            />
            <span id="erroGraduation"></span>
          </div>

          <div className="input-block btn-to-right">
            <ButtonFinish id="tab3" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ThirdTab;
