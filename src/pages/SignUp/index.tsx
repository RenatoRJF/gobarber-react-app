import React, { FC, useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(async (data: FormData): Promise<void> => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Name is required.'),
        email: Yup.string()
          .required('Email is required.')
          .email('Email is not valid.'),
        password: Yup.string().min(6, 'Minimum 6 characters.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      history.push('/dashboard');
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
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
        </Form>

        <Link to="/">
          <FiArrowLeft />
          Back to login
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
