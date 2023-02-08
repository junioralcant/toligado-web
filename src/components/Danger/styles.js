import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.62rem;

  width: 18.75rem;
  height: 24.75rem;
  background: #fff;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 0.62rem;
  color: #666666;

  .header {
    position: relative;
    width: 100%;
    display: flex;
    height: 1.87rem;
    margin-bottom: 1.1rem;
    justify-content: space-between;

    strong {
      display: inline-block;
      width: 12rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .header .box-date {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    p {
      color: #fff;
      padding: 0.32rem;
      border-radius: 3px;
      text-decoration: none;
      font-size: 13px;
      margin-top: 0.32rem;
    }

    p.resolved {
      background: #53c579;
    }

    p.analysis {
      background: #ffc447;
    }

    p.disapproved {
      background: #f32424;
    }

    .risk-category {
      margin-top: 0.12rem;
    }
  }

  img {
    width: 17.5rem;
    height: 12.5rem;
    border-radius: 10px;
    margin-bottom: 0.62rem;
    margin-top: 0.42rem;
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

      &.location {
        width: 15.75rem;
        cursor: pointer;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        margin-bottom: 0.31rem;
        margin-top: 0.31rem;
      }
    }

    p.short_description {
      width: 16.75rem;
      cursor: pointer;

      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 0.62rem;
    }

    .error {
      color: #f32424;
    }

    .ok {
      color: #3e8355;
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

      button.not-resolved {
        font-size: 16px;
        font-weight: bold;
        background: #ffc447;
        padding: 5px;
        border-radius: 3px;
        color: #ffffff;
        margin-left: 5px;

        &:hover {
          background: #e69d00;
        }
      }

      .resolved {
        font-size: 16px;
        font-weight: bold;
        background: #53c579;
        padding: 5px;
        border-radius: 3px;
        color: #ffffff;
      }

      button.resolve-record {
        color: #53c579;
        font-size: 25px;
        margin-left: 5px;
        padding-bottom: -10px;

        &:hover {
          color: #133920;
        }
      }
    }
  }
`;

export const ModalShowResolved = styled.div`
  display: none;  
  justify-content: space-between;
  min-width: 4.5rem;
  position: absolute;
  min-height: 1rem;
  background: #f2f2f2;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 0.31rem;
  font-size: 1.5rem;
  /* flex-direction: column; */

  svg {
    cursor: pointer;
    margin-left: 0.31rem;
    margin-rigth: 0.31rem;

  }

  .approved {
    color: #53c579;

    &:hover {
      color: #3e8355;
    }
  }

  .view {
    text-decoration: none;
    color: #696969

    &:hover {
      color: #595959;
    }
  }

  .delete {
    color: #f64646;

    &:hover {
      color: #bb3939;
    }
  }
  
  ${(props) =>
    props.active ? 'display: block' : 'display: none !important'}
`;

export const ModalDescription = styled.div`
  display: none;
  width: 90% !important;
  cursor: pointer;
  position: absolute;
  min-height: 1rem;
  background: #f2f2f2;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 0.31rem;
  bottom: 2.5rem;

  flex-direction: column;

  p {
    margin-top: 0.5rem;
  }

  ${(props) =>
    props.active ? 'display: block' : 'display: none !important'}
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
