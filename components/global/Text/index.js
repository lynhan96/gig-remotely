import React from 'react';
import PropTypes from 'prop-types';
import { StyledText } from './styles';

const Text = ({
  children,
  size,
  style,
  width,
  weight,
}) => {
  const fontSize = () => {
    switch (size) {
      case 'xs':
        return 14;
      case 'sm':
        return 16;
      case 'md':
        return 18;
      case 'lg':
        return 24;
      case 'xl':
        return 24;
      case 'xxxl':
        return 70;
      default:
        return 16;
    }
  };

  return (
    <StyledText
      width={width}
      style={style}
      size={fontSize()}
      weight={weight}
    >
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
  ]),
  style: PropTypes.shape(),
  width: PropTypes.string,
  children: PropTypes.node,
  weight: PropTypes.string,
};

Text.defaultProps = {
  weight: 'normal',
  width: '100%',
  size: 'sm',
  style: {},
  children: null,
};

export default Text;
