import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ChexBoxWrapper,
} from './styles';

const CheckBox = ({
  name,
  onChange,
  className,
  defaultValue,
  label,
}) => {
  const [checked, setChecked] = useState(defaultValue);
  const handleOnchange = (e) => {
    setChecked(!checked);
    onChange({ name: e.target.name, value: !checked });
  };

  useEffect(() => {
    onChange({ name, value: defaultValue });
  }, []);

  return (
    <ChexBoxWrapper className={className}>
      {label}
      <input name={name} type='checkbox' onChange={handleOnchange} checked={checked} />
      <span />
    </ChexBoxWrapper>
  );
};

CheckBox.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  defaultValue: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

CheckBox.defaultProps = {
  className: '',
  name: '',
  onChange: () => {},
  defaultValue: false,
  label: '',
};

export default CheckBox;
