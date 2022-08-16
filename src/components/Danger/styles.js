import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.62rem;

  width: 18.75rem;
  height: 23.75rem;
  background: #fff;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 0.62rem;
  color: #666666;

  .header {
    width: 100%;
    display: flex;
    height: 1.87rem;
    margin-bottom: 1.87rem;
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
      padding: 0.32rem;
      border-radius: 3px;
      text-decoration: none;
      font-size: 13px;
    }
  }

  img {
    width: 17.5rem;
    height: 12.5rem;
    border-radius: 10px;
    margin-bottom: 0.62rem;
    margin-top: 0.62rem;
    object-fit: cover;
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

    div {
      display: flex;
      justify-content: space-between;
      width: 6.25rem;

      button {
        background: none;
        border: none;
        font-size: 1.3rem;
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
  font-size: 0.93rem;
  padding: 0.32rem;
  border-radius: 5px;
  border: none;

  top: -5.6rem;
  left: -5.6rem;
  span {
    margin-top: 0.32rem;
    margin-left: 0.32rem;
    font-size: 1.56rem;
  }

  &:hover {
    background: #138752;
  }
`;

export const BoxInputsDate = styled.div`
  position: absolute;
  top: -6.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 80%;

  strong {
    margin-right: 1.25rem;
  }

  button.search {
    background-color: #208eeb;
    border: 0;
    padding: 0.32rem;
    justify-content: center;
    align-items: center;
    margin-top: 0.62rem;
    border-radius: 10px;
    height: 3.75rem;
    width: 12.5rem;
    font-size: 1.8rem;
  }
  button.excluir {
    background-color: #ae3d0c;
    border: 0;
    padding: 0.32rem;
    justify-content: center;
    align-items: center;
    margin-top: 0.62rem;
    border-radius: 10px;
    height: 3.75rem;
    width: 12.5rem;
    font-size: 1.8rem;
    margin-left: 0.62rem;
  }
`;

export const BoxInpuDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 0.62rem;
  /* padding: 1.25rem 1.25rem 0 1.25rem; */
  input.date {
    height: 3.75rem;
    background-color: #fff;
    margin: 0 0.93rem 0 0;
    border-radius: 10px;
    padding-left: 0.93rem;
    padding-right: 0.93rem;
    border: 1px #c4c4c4;
    width: 100%;
  }
`;

export const BoxLoader = styled.div`
  margin-top: -50%;
`;
