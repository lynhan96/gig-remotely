import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Icon } from './styles';

const Alert = ({
  children,
  open,
  onClose,
}) => open && (
  <Wrapper>
    {children}
    <Icon src='/images/icon/close.svg' onClick={onClose} />
  </Wrapper>
);

Alert.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

Alert.defaultProps = {
  open: false,
  onClose: null,
  children: null,
};

export default Alert;
