import styled from 'styled-components';

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
