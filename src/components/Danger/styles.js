import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;

  width: 300px;
  height: 380px;
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

export const BoxInputsDate = styled.div`
  position: absolute;
  top: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 80%;

  strong {
    margin-right: 20px;
  }

  button.search {
    background-color: #208eeb;
    border: 0;
    padding: 5px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    border-radius: 10px;
    height: 60px;
    width: 200px;
    font-size: 30px;
  }
  button.excluir {
    background-color: #ae3d0c;
    border: 0;
    padding: 5px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    border-radius: 10px;
    height: 60px;
    width: 200px;
    font-size: 30px;
    margin-left: 10px;
  }
`;

export const BoxInpuDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  /* padding: 20px 20px 0 20px; */
  input.date {
    height: 60px;
    background-color: #fff;
    margin: 0 15px 0px 0;
    border-radius: 10px;
    padding-left: 15px;
    padding-right: 15px;
    border: 1px #c4c4c4;
    width: 100%;
  }
`;
