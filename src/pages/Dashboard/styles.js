import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  width: 650px;
  height: 300px;
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
  width: 300px;
  height: 120px;
  padding: 10px;
  margin-bottom: 10px;

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
  font-size: 45px;

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
      height: 60px;
    }
  }

  strong {
    font-size: 30px;
  }

  p {
    font-size: 15px;
  }
`;

export const Girl = styled.img`
  position: absolute;
  right: 20px;
  height: 412px;
  bottom: 10px;

  @media (max-width: 1000px) {
    display: none;
  }
`;
