import { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

import xCircle from '../../../assets/images/x-circle.svg';
import checkCircle from '../../../assets/images/check-circle.svg';

import { Container } from './styles';

export default function ToastMessage({
  message, onRemoveMessage, isLeaving, onAnimationEnd,
}) {
  const animatedElementRef = useRef(null);

  useEffect(() => {
    const elementRef = animatedElementRef.current;
    if (isLeaving) {
      elementRef.addEventListener('animationend', () => {
        onAnimationEnd(message.id);
      });
    }

    return () => {
      elementRef.removeEventListener('animationend', () => {
        onAnimationEnd(message.id);
      });
    };
  }, [isLeaving, onAnimationEnd, message.id]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration || 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [
    message,
    onRemoveMessage,
  ]);

  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return (
    <Container
      type={message.type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
      isLeaving={isLeaving}
      ref={animatedElementRef}
    >
      {message.type === 'danger' && <img src={xCircle} alt="X" />}
      {message.type === 'success' && <img src={checkCircle} alt="Check" />}
      <strong>{message.text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
    duration: PropTypes.number,
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
  isLeaving: PropTypes.bool.isRequired,
  onAnimationEnd: PropTypes.func.isRequired,
};
