import PropTypes from 'prop-types';

import Button from '../Button';
import ReactPortal from '../ReactPortal';

import { Overlay, Container, Footer } from './styles';
import useAnimatedUnmount from '../../hooks/useAnimatedUnmount';

export default function Modal({
  danger, visible, title, children, cancelLabel, confirmLabel, onCancel, onConfirm, isLoading,
}) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(visible);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay isLeaving={!visible} ref={animatedElementRef}>
        <Container danger={danger} isLeaving={!visible}>
          <h1>
            {title}

          </h1>

          <div className="modal-body">{children}</div>

          <Footer>
            <button type="button" onClick={onCancel} disabled={isLoading} className="cancel-button">{cancelLabel}</button>
            <Button type="button" onClick={onConfirm} danger={danger} isLoading={isLoading}>{confirmLabel}</Button>
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  visible: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
  visible: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
  isLoading: false,
};
