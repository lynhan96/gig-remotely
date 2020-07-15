import React from 'react';
import PropTypes from 'prop-types';
import { StyledText } from './styles';

const fontSize = (size) => {
  switch (size) {
    case 'xs':
      return 15;
    case 'sm':
      return 17;
    case 'md':
      return 18;
    case 'mmd':
      return 20;
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

const toTitleCase = (str) => str.replace(/[^a-zA-Z ]/g, ' ').replace(
  /([^\W_]+[^\s-]*) */g,
  (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
);

const Text = ({
  children,
  size,
  style,
  width,
  weight,
  className,
  color,
}) => (
  <StyledText
    color={color}
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
Text.toTitleCase = (str) => toTitleCase(str);

Text.propTypes = {
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'md',
    'mmd',
    'lg',
    'llg',
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
  color: PropTypes.string,
};

Text.defaultProps = {
  className: '',
  weight: 'normal',
  width: '100%',
  size: 'sm',
  style: {},
  children: null,
  color: '',
};

export default Text;
