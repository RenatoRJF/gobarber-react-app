import React, { FC } from 'react';

interface TooltipProps {
  text: string;
  className?: string;
}

import { Container } from './styles';

const Tooltip: FC<TooltipProps> = ({ className, text, children }) => (
  <Container className={className}>
    {children}
    <span>{text}</span>
  </Container>
);

export default Tooltip;
