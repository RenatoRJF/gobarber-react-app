import React, { FC, useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiMail, FiLock, FiUser, FiCamera, FiArrowLeft } from 'react-icons/fi';
import * as Yup from 'yup';
import { useHistory, Link } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, AvatarInputFile } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Profile: FC = () => {
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
      <header>
        <div>
          <Link to="/dashboard">
            <FiArrowLeft />
          </Link>
        </div>
      </header>

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <AvatarInputFile>
            <img
              src="https://www.andersonsobelcosmetic.com/wp-content/uploads/2018/09/chin-implant-vs-fillers-best-for-improving-profile-bellevue-washington-chin-surgery.jpg"
              alt="photo profile"
            />
            <button type="button">
              <FiCamera />
            </button>
          </AvatarInputFile>

          <h1>Profile</h1>

          <Input name="name" icon={FiUser} placeholder="Name" />

          <Input name="email" icon={FiMail} placeholder="Email" />

          <Input
            name="current_password"
            icon={FiLock}
            type="password"
            placeholder="password"
          />

          <Input
            name="new_password"
            icon={FiLock}
            type="password"
            placeholder="password"
          />

          <Input
            name="password_confirmation"
            icon={FiLock}
            type="password"
            placeholder="password"
          />

          <Button type="submit">Save changes</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Profile;
