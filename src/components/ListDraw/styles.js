import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;

  width: 300px;
  background: #fff;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 10px;
  color: #666666;

  small.resolved {
    margin-top: -13px;
    margin-bottom: 10px;
    color: #53c579;
    font-size: 14px;
    font-weight: bold;
  }

  .header {
    width: 100%;
    display: flex;
    height: 30px;
    margin-bottom: 10px;
    justify-content: space-between;
  }

  img {
    width: 280px;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .footer {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 300px;
    text-align: center;

    strong {
      font-size: 15px;
    }

    p {
      margin-bottom: 10px;
    }
    button {
      background: none;
      border: none;
      font-size: 22px;
      color: #f64646;
    }
  }

  .margin-10 {
    margin: 10px;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 230px;
  top: -70px;
  background: #1ba667;
  border: none;
  padding: 20px;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  border-radius: 5px;

  &:hover {
    background: #138752;
  }

  @media (max-width: 661px) {
    left: 20px;
  }
`;

export const SubCard = styled.div`
  background: #2b84cf;
  color: #fff;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
`;
