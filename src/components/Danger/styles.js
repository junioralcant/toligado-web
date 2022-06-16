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

    div {
      display: flex;
      justify-content: space-between;
      width: 100px;

      button {
        background: none;
        border: none;
        font-size: 22px;
      }

      button.checked {
        color: #53c579;

        &:hover {
          color: #3e8355;
        }
      }

      button.details {
        color: #208eeb;

        &:hover {
          color: #0f60a3;
        }
      }

      button.delete {
        color: #f64646;

        &:hover {
          color: #bb3939;
        }
      }
    }
  }
`;
