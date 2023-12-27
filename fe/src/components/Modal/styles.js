import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  left: 0;
  top: 0;

  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.6);

  backdrop-filter: blur(4px);

`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;

  background: #FFF;

  border-radius: 4px;

  padding: 24px;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  > h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.gray[900]
  )};
  }

  .modal-body {
    margin-top: 24px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 32px;

  .cancel-button {
    background: transparent;
    border: none;
    margin-right: 24px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[200]};

    &[disabled] {
      cursor: not-allowed;
    }
  }
`;
