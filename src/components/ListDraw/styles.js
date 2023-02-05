import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.62rem;

  width: 18.75rem;
  height: 12.5rem;
  background: #fff;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 0.62rem;
  color: #666666;

  small.resolved {
    margin-top: -0.82rem;
    margin-bottom: 0.62rem;
    color: #53c579;
    font-size: 0.87rem;
    font-weight: bold;
  }

  .header {
    width: 100%;
    display: flex;
    height: 1.87rem;
    margin-bottom: 0.62rem;
    justify-content: space-between;
  }

  img {
    width: 17.5rem;
    border-radius: 10px;
    margin-bottom: 0.62rem;
  }

  .footer {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 18.75rem;
    text-align: center;

    strong {
      font-size: 0.93rem;
    }

    p {
      margin-bottom: 0.62rem;
    }
    button {
      background: none;
      border: none;
      font-size: 1.37rem;
      color: #f64646;
    }
  }

  .margin-10 {
    margin: 0.62rem;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 21.87rem;
  top: -70px;
  background: #1ba667;
  border: none;
  padding: 1.25rem;
  color: #fff;
  font-weight: bold;
  font-size: 0.93rem;
  border-radius: 5px;

  &:hover {
    background: #138752;
  }

  @media (max-width: 661px) {
    left: 1.25rem;
  }
`;

export const SubCard = styled.div`
  background: #2b84cf;
  color: #fff;
  height: 6.25rem;
  margin-bottom: 0.62rem;
  padding: 0.62rem;
  border-radius: 5px;
`;

export const BoxLoader = styled.div`
  margin-top: 10%;
`;

export const BoxResolved = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  span {
    position: absolute;
    color: #ffd700;
    font-size: 30px;
    right: 0px;
    top: -28px;
  }
`;
