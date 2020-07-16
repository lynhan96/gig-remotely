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
  type,
  htmlType,
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
      className={className}
      width={width}
      style={style}
      size={fontSize()}
      onClick={onClick}
      type={type}
      htmlType={htmlType}
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
  type: PropTypes.string,
  htmlType: PropTypes.string,
};

Button.defaultProps = {
  type: 'default',
  className: '',
  width: 'auto',
  size: 'md',
  htmlType: 'button',
  style: {},
  onClick: null,
  children: null,
};

export default Button;
