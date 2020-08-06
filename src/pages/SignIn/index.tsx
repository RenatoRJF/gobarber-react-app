import React, { FC } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="logo" />

      <form>
        <h1>Sign in</h1>

        <Input name="email" icon={FiMail} placeholder="Email" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="password"
        />

        <Button type="submit">Enter</Button>

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
