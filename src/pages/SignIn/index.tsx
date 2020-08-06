import React, { FC } from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="logo" />

      <form>
        <h1>Sign in</h1>

        <input placeholder="Email" />

        <input type="password" placeholder="password" />

        <button type="submit">Enter</button>

        <a href="/forgot">Forgot password</a>
      </form>

      <a href="/sign-up">
        <FiLogIn />
        Sign up
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
