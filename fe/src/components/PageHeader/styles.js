import styled from 'styled-components';

export const Header = styled.header`
  background: ${({ theme }) => theme.colors.primary.dark};
  width: 100%;
  height: 121px;
  display: flex;
  align-items: center;

  img {
    height: 88px;
    width: 363px;
    margin-left: 28px;
  }
`;
