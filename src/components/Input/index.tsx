import React, { FC, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: FC<InputProps> = ({ icon: Icon, ...props }) => (
  <Container>
    {Icon && <Icon />}
    <input {...props} />
  </Container>
);

export default Input;
