import styled from 'styled-components';

export default styled.button`
  background: ${({ theme }) => theme.colors.primary.dark};
  color: #FFFFFF;
  width: 100%;
  height: 100%;
  padding: 12px 37px;
  font-size: 18px;
  font-weight: 400;
  border: none;
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.grey[400]};
    color: ${({ theme }) => theme.colors.primary.dark};
    border: 1px solid ${({ theme }) => theme.colors.primary.dark};
  }
`;
