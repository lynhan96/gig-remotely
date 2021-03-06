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
  cantoggle,
}) => {
  const [checked, setChecked] = useState(defaultValue);
  const handleOnchange = (e) => {
    if (cantoggle) {
      setChecked(!checked);
    } else {
      setChecked(true);
    }

    onChange({ name, value: !checked });
  };

  useEffect(() => {
  }, []);

  useEffect(() => {
    setChecked(defaultValue);
  }, [defaultValue]);

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
  cantoggle: PropTypes.bool,
};

CheckBox.defaultProps = {
  className: '',
  name: '',
  onChange: () => {},
  defaultValue: false,
  label: '',
  cantoggle: true,
};

export default CheckBox;
