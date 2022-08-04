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
    margin-bottom: 18px;
    justify-content: space-between;
  }

  .header .box-date {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    a.resolved {
      margin-top: 3px;
      background: #53c579;
      color: #fff;
      padding: 5px;
      border-radius: 3px;
      text-decoration: none;
      font-size: 13px;
    }
  }

  img {
    width: 280px;
    height: 200px;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    object-fit: cover;
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

export const ButtonDownload = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1ba667;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  padding: 5px;
  border-radius: 5px;
  border: none;

  top: -90px;
  left: -90px;
  span {
    margin-top: 5px;
    margin-left: 5px;
    font-size: 25px;
  }

  &:hover {
    background: #138752;
  }
`;
