import { keyframes, css } from 'styled-components';

type Direction = 'top' | 'bottom' | 'left' | 'right';

export const appearFrom = (direction: Direction) => {
  return keyframes`
    from {
      opacity: 0;
      ${
        direction === 'top' &&
        css`
          transform: translateY(-50px);
        `
      }
      ${
        direction === 'bottom' &&
        css`
          transform: translateY(50px);
        `
      }
      ${
        direction === 'left' &&
        css`
          transform: translateX(-50px);
        `
      }
      ${
        direction === 'right' &&
        css`
          transform: translateX(50px);
        `
      }
    }
    to {
      opacity: 1;
      transform: translateX(0);
      transform: translateY(0);
    }
  `;
};
