import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/global';
import { StyledLoading, Wrapper } from './styles';

const Loading = ({
  className, size, showText,
}) => (
  <Wrapper>
    {showText && <Text width='auto' size='llg' style={{ marginTop: 22, marginRight: 5 }}>Loading</Text>}
    <StyledLoading
      className={className}
      size={size}
    />
  </Wrapper>
);

Loading.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  showText: PropTypes.bool,
};

Loading.defaultProps = {
  className: '',
  size: '',
  showText: false,
};

export default Loading;
