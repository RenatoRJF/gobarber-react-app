import styled from 'styled-components';
import { shade } from 'polished';
import { appearFrom } from '../../styles/animations';

export const Container = styled.div`
  header {
    background-color: #28262e;
    height: 146px;

    div {
      height: 100%;
      display: flex;
      align-items: center;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        color: #999591;
        width: 25px;
        height: 25px;
        animation: ${appearFrom('right')} 1s;
        transition: color 0.2s;

        &:hover {
          color: #ff9000;
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: -170px auto 0;
  animation: ${appearFrom('left')} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }

    div:nth-child(5) {
      margin-top: 24px;
    }
  }
`;

export const AvatarInputFile = styled.div`
  margin: 0 auto 32px;
  position: relative;
  width: 186px;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  button {
    background-color: #ff9000;
    outline: 0;
    position: absolute;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    transition: background-color 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background-color: ${shade(0.2, '#ff9000')};
    }
  }
`;
