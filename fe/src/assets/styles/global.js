import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
  }

  body {
    background: #FFFFFF;
    color: ${({ theme }) => theme.colors.primary.letters};
    font-size: 18px;
  }

  button {
    cursor: pointer;
  }
`;
