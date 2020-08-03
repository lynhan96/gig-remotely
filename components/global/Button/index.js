import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const Button = ({
  width,
  children,
  size,
  style,
  onClick,
  className,
  buttonType,
  htmlType,
  disabled,
  id,
}) => {
  const fontSize = () => {
    switch (size) {
      case 'sm':
        return 16;
      case 'md':
        return 18;
      case 'lg':
        return 24;
      default:
        return 18;
    }
  };

  return (
    <StyledButton
      id={id}
      disabled={disabled}
      className={className}
      width={width}
      style={style}
      size={fontSize()}
      onClick={onClick}
      buttonType={buttonType}
      type={htmlType}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg',
  ]),
  style: PropTypes.shape(),
  onClick: PropTypes.func,
  children: PropTypes.node,
  width: PropTypes.string,
  className: PropTypes.string,
  buttonType: PropTypes.string,
  htmlType: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
};

Button.defaultProps = {
  buttonType: 'default',
  className: '',
  width: 'auto',
  size: 'md',
  htmlType: 'button',
  style: {},
  onClick: null,
  children: null,
  disabled: false,
  id: '',
};

export default Button;
