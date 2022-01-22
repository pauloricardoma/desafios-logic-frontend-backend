import styled from 'styled-components';

export const Header = styled.header`
  background: ${({ theme }) => theme.colors.primary.dark};
  width: 100%;
  height: 121px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 88px;
    width: 363px;
  }

  @media (max-width: 354px) {
    img {
      height: 68px;
      width: 303px;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1143px;
  display: flex;
  align-items: center;
  justify-content: start;

  @media (max-width: 576px) {
    justify-content: center;
  }
`;
