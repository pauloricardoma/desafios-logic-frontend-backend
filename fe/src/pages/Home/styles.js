import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  background: ${({ theme }) => theme.colors.grey[400]};
  width: 100%;
  max-width: 1143px;
  height: 100%;
  max-height: 459px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 69px;

  @media (max-width: 576px) {
    max-height: 100%;
    margin-bottom: 69px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 541px;
  margin: 44px 20px 59px 20px;

  .div-nome {
    input {
      margin-top: 5px;
    }

    small {
      color: red;
    }
  }

  .div-profissao-cell {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 576px) {
      flex-direction: column;
    }

    div{
      width: 100%;

      input {
        margin-top: 5px;
      }

      +div {
        margin-left: 33px;

        @media (max-width: 576px) {
          margin-top: 20px;
          margin-left: 0;
        }
      }
    }
  }

  .div-ip {
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    .ip-input-button {
      display: flex;
      flex-direction: row;
      margin-top: 5px;

      @media (max-width: 576px) {
        flex-direction: column;
      }

      .ip-input {
        width: 100%;
      }

      .ip-button {
        width: 100%;
        max-width: 200px;
        margin-left: 33px;

        @media (max-width: 576px) {
          margin-left: 0;
          margin-top: 20px;
        }

        button {
          background: ${({ theme }) => theme.colors.primary.main};
          color: ${({ theme }) => theme.colors.primary.dark};

          &:hover {
            background: ${({ theme }) => theme.colors.primary.dark};
            color: #FFFFFF;
          }
        }
      }

      small {
        color: red;
      }
    }
  }

  .buttons-save-clean {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 62px;
    span+span {
      margin-left: 33px;
    }
  }
`;
