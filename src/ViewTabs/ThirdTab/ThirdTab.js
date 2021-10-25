import React from 'react';
import ButtonFinish from '../../Components/Buttons/ButtonFinish/ButtonFinish';
import ButtonMore from '../../Components/Buttons/ButtonMore/ButtonMore';
import CertificatesInput from '../../Components/CertificatesInput/CertificatesInput';
import CommonInput from '../../Components/CommonInput/CommonInput';
import TabsMenu from '../../Components/TabsMenu/TabsMenu';
import Title from '../../Components/Title/Title';
import './ThirdTab.css';

const ThirdTab = () => {
  return (
    <>
      <section id="third-tab">
        <Title text="Team Sign Up" />
        <TabsMenu
          tab1="Basic"
          tab2="Social"
          tab3="Certificates"
          active3="active"
        />

        <div id="content_3tab">
          <div id="entry-certificates" class="input-block div-heart">
            <CertificatesInput />
          </div>
          <div class="input-block btn-space-between btn-more">
            <div class="certificates-list">
              <ul class="certificates-ul">
                <li class="certificates-opt hide">
                  <span class="certificates-span">Certificates</span>
                  <i data-feather="chevron-down"></i>
                </li>
                <div class="certificates-added hide">
                  <div class="certificates-favorite"></div>
                  <div class="certificates-normal"></div>
                </div>
              </ul>
            </div>
            <div class="prevent-align-flex-start">
              <ButtonMore />
            </div>
          </div>

          <div class="input-block">
            <CommonInput
              type="text"
              label="Team Name *"
              id="teamName"
              placeholder="My Teams Name"
              required
            />
            <span id="erroTeamName"></span>
          </div>

          <div class="input-block">
            <CommonInput
              type="text"
              label="Institution *"
              id="institution"
              placeholder="Universidade Federal da Paraíba"
              required
            />
            <span id="erroInstitution"></span>
          </div>

          <div class="input-block">
            <CommonInput
              type="text"
              label="Graduation *"
              id="graduation"
              placeholder="Ciência da Computação"
              required
            />
            <span id="erroGraduation"></span>
          </div>

          <div class="input-block btn-to-right">
            <ButtonFinish />
          </div>
        </div>
      </section>
    </>
  );
};

export default ThirdTab;
