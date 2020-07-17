import React from 'react';
import PropTypes from 'prop-types';
import { StyledLoading } from './styles';

const Loading = ({
  className, size,
}) => (
  <StyledLoading
    className={className}
    size={size}
  />
);

Loading.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
};

Loading.defaultProps = {
  className: '',
  size: '',
};

export default Loading;
