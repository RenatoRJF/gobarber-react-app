import React, { FC } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignUp: FC = () => (
  <Container>
    <Background />

    <Content>
      <img src={logoImg} alt="logo" />

      <form>
        <h1>Sign up</h1>

        <Input name="name" icon={FiUser} placeholder="Name" />

        <Input name="email" icon={FiMail} placeholder="Email" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="password"
        />

        <Button type="submit">Create Account</Button>
      </form>

      <a href="/sign-up">
        <FiArrowLeft />
        Back to login
      </a>
    </Content>
  </Container>
);

export default SignUp;
