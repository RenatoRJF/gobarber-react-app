import React, { FC } from 'react';
import { FiPower } from 'react-icons/fi';

import { Container, Header, HeaderContent, Profile } from './styles';
import logoImg from '../../assets/logo.svg';

const Dahsboard: FC = () => (
  <Container>
    <Header>
      <HeaderContent>
        <img src={logoImg} alt="logo" />

        <Profile>
          <img
            src="https://www.andersonsobelcosmetic.com/wp-content/uploads/2018/09/chin-implant-vs-fillers-best-for-improving-profile-bellevue-washington-chin-surgery.jpg"
            alt="Beatriz"
          />

          <div>
            <span>Welcome,</span>
            <strong>Beatriz Gonçales</strong>
          </div>
        </Profile>

        <button type="button">
          <FiPower />
        </button>
      </HeaderContent>
    </Header>
  </Container>
);

export default Dahsboard;
