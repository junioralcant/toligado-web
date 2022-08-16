import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 3.12rem;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  width: 40.62rem;
  height: 18.75rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18.75rem;
  height: 7.5rem;
  padding: 0.62rem;
  margin-bottom: 0.62rem;

  cursor: pointer;
  background-image: ${(props) =>
    (props.records &&
      'linear-gradient(to right, #23E6D9, #208eeb)') ||
    (props.lucky && 'linear-gradient(to right, #FF8F93, #F75995)') ||
    (props.analysis &&
      'linear-gradient(to right, #FF9C52, #FFC447)') ||
    (props.aproved &&
      'linear-gradient(to right, #3BB5B4, #3ADF96)') ||
    (props.disapproved &&
      'linear-gradient(to right, #F32424, #D82D6E)') ||
    (props.download && 'linear-gradient(to right, #138752, #1ba667)')}
      
      }

  }
  border-radius: 10px;
  color: #fff;
  font-size: 2.81rem;

  &:hover {
    background-image: ${(props) =>
      (props.records &&
        'linear-gradient(to right, #208eeb, #23E6D9)') ||
      (props.lucky &&
        'linear-gradient(to right, #F75995, #FF8F93)') ||
      (props.analysis &&
        'linear-gradient(to right, #FFC447, #FF9C52)') ||
      (props.aproved &&
        'linear-gradient(to right, #3ADF96, #3BB5B4)') ||
      (props.disapproved &&
        'linear-gradient(to right, #D82D6E, #F32424)') ||
      (props.download &&
        'linear-gradient(to right, #1ba667, #138752)')}
      
    }
        }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;

    div {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 3.75rem;
    }
  }

  strong {
    font-size: 1.87rem;
  }

  p {
    font-size: 0.93rem;
  }
`;

export const Girl = styled.img`
  position: absolute;
  right: 1.25rem;
  height: 25.75rem;
  bottom: 0.62rem;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Title = styled.h1`
  position: absolute;
  top: -3.75rem;
  left: 18%;

  font-size: 1.56rem;
  color: #4d4d4d;
`;
