import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  height: 52px;

  background: #FFF;

  box-shadow: 0px 4px 10px (0, 0, 0, 0.04);

  border: 2px solid #FFF;
  border-radius: 4px;

  outline: none;

  padding: 0 16px;

  font-size: 16px;

  transition: border-color 0.2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main}
  }

  ${({ theme, error }) => error && css`
    border-color: ${theme.colors.danger.main} !important;

    color: ${theme.colors.danger.main}
  `}

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
