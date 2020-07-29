import React from 'react';
import PropTypes from 'prop-types';
import { StyledTag } from './styles';

const fontSize = (size) => {
  switch (size) {
    case 'xxs':
      return 13;
    case 'xs':
      return 15;
    case 'sm':
      return 17;
    case 'md':
      return 18;
    case 'lg':
      return 24;
    case 'llg':
      return 27;
    case 'xl':
      return 32;
    case 'xxl':
      return 48;
    case 'xxxl':
      return 56;
    case 'xxxxl':
      return 70;
    default:
      return 16;
  }
};

const Tag = ({
  children,
  size,
  style,
  weight,
  className,
  disabled,
  onClick,
}) => (
  <StyledTag
    className={className}
    style={style}
    size={fontSize(size)}
    weight={weight}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </StyledTag>
);

Tag.fontSize = (size) => fontSize(size);

Tag.propTypes = {
  size: PropTypes.oneOf([
    'xxs',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
    'xxxl',
    'xxxxl',
  ]),
  style: PropTypes.shape(),
  className: PropTypes.string,
  children: PropTypes.node,
  weight: PropTypes.string,
  disabled: PropTypes.bool,
  onCLick: PropTypes.func,
};

Tag.defaultProps = {
  disabled: false,
  className: '',
  weight: 'normal',
  size: 'sm',
  style: {},
  children: null,
  onClick: () => {},
};

export default Tag;
