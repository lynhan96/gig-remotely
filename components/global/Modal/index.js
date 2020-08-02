import React from 'react';
import PropTypes from 'prop-types';
import { StyledModal, CloseIcon } from './styles';

const Modal = ({
  isOpen, onClose, children, className, showCloseIcon, shouldCloseOnOverlayClick,
}) => (
  <StyledModal
    className={className}
    isOpen={isOpen}
    onRequestClose={onClose}
    shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    ariaHideApp={false}
  >
    { showCloseIcon && <CloseIcon src='/images/icon/close.svg' onClick={onClose} />}
    {children}
  </StyledModal>
);

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  showCloseIcon: PropTypes.bool,
  shouldCloseOnOverlayClick: PropTypes.bool,
};

Modal.defaultProps = {
  className: '',
  isOpen: false,
  showCloseIcon: true,
  children: null,
  onClose: null,
  shouldCloseOnOverlayClick: true,
};

export default Modal;
