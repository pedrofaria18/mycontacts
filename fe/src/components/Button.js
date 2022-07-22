import styled from 'styled-components';

export default styled.button`
  height: 52px;

  padding: 0 16px;

  background: ${({ theme }) => theme.colors.primary.main};

  box-shadow: 0px 4px 10px (0, 0, 0, 0.04);

  border: none;
  border-radius: 4px;

  font-size: 16px;
  font-weight: bold;

  color: #FFF;

  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #CCC;
    cursor: default;
  }
`;
