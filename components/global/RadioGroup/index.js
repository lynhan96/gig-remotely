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
  const [checked, setChecked] = useState(defaultValue);
  const handleOnchange = (e) => {
    if (checked === e.target.name) {
      setChecked('');
      onChange({ name: '', value: e.target.value });
    } else {
      setChecked(e.target.name);
      onChange({ name: e.target.name, value: e.target.value });
    }
  };

  useEffect(() => {
    onChange({ name: defaultValue, value: 'on' });
  }, []);

  return (
    <Wrapper className={className}>
      {
        items.map(({ label, name }) => (
          <ItemWrapper key={name}>
            <input id={name} name={name} type='checkbox' onChange={handleOnchange} checked={(checked === name) && 'true'} />
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
