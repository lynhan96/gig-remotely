import React from 'react';
import PropTypes from 'prop-types';
import { StyledText } from './styles';

const fontSize = (size) => {
  switch (size) {
    case 'xs':
      return 15;
    case 'sm':
      return 16;
    case 'md':
      return 18;
    case 'lg':
      return 24;
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

const Text = ({
  children,
  size,
  style,
  width,
  weight,
  className,
}) => (
  <StyledText
    className={className}
    width={width}
    style={style}
    size={fontSize(size)}
    weight={weight}
  >
    {children}
  </StyledText>
);

Text.fontSize = (size) => fontSize(size);

Text.propTypes = {
  size: PropTypes.oneOf([
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
  width: PropTypes.string,
  children: PropTypes.node,
  weight: PropTypes.string,
};

Text.defaultProps = {
  className: '',
  weight: 'normal',
  width: '100%',
  size: 'sm',
  style: {},
  children: null,
};

export default Text;
