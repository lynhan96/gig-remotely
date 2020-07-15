import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper, ItemWrapper,
} from './styles';

const RadioGroup = ({
  items,
  onChange,
  className,
}) => {
  const [checked, setChecked] = useState('');
  const handleOnchange = (e) => {
    setChecked(e.target.name);
    onChange({ name: e.target.name, value: e.target.value });
  };

  return (
    <Wrapper className={className}>
      {
        items.map(({ label, name }, index) => (
          <ItemWrapper key={index}>
            <input id={name} name={name} type='radio' onChange={handleOnchange} checked={checked === name && 'true'} />
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
};

RadioGroup.defaultProps = {
  className: '',
  items: [],
  onChange: null,
};

export default RadioGroup;
