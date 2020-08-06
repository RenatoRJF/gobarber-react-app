import React, { FC, useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

interface FormData {
  email: string;
}

const ForgotPassword: FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: FormData): Promise<void> => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email is required.')
          .email('Email is not valid.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Forgot password</h1>

          <Input name="email" icon={FiMail} placeholder="Email" />

          <Button type="submit">Send</Button>
        </Form>

        <Link to="/">
          <FiLogIn />
          Back to sign in
        </Link>
      </Content>

      <Background />
    </Container>
  );
};

export default ForgotPassword;
