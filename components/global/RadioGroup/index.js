import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper, ItemWrapper,
} from './styles';

const RadioGroup = ({
  items,
  onChange,
  className,
  defaultValue,
}) => {
  const [checked, setChecked] = useState('');
  const handleOnchange = (e) => {
    setChecked(e.target.name);
    onChange({ name: e.target.name, value: e.target.value });
  };

  useEffect(() => {
    onChange({ name: defaultValue, value: 'on' });
  }, []);

  return (
    <Wrapper className={className}>
      {
        items.map(({ label, name }, index) => (
          <ItemWrapper key={index}>
            <input id={name} name={name} type='radio' onChange={handleOnchange} checked={(defaultValue === name || checked === name) && 'true'} />
            <label htmlFor={name}>{label}</label>
          </ItemWrapper>
        ))
      }
    </Wrapper>
  );
};

RadioGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  onChange: PropTypes.func,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
};

RadioGroup.defaultProps = {
  className: '',
  items: [],
  onChange: null,
  defaultValue: '',
};

export default RadioGroup;
