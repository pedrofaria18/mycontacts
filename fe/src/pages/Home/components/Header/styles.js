import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;

  margin-top: 32px;

  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
  padding-bottom: 16px;

  strong {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  a {
    display: flex;
    align-items: center;

    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;

    color: ${({ theme }) => theme.colors.primary.main};

    text-decoration: none;

    font-weight: bold;

    padding: 8px 16px;

    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #FFF;
    }
  }
`;
