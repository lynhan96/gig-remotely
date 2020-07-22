import React, { useState, useEffect } from 'react';
import {
  Wrapper, Label, GroupButton, Item,
} from './styles';

const OptionsGroup = ({
  fieldRef, label, defaultValue, options,
}) => {
  const getDefaultValue = () => {
    const defaultOption = options.filter((i) => i.value === defaultValue)[0];
    return defaultOption || options[0];
  };

  const [selected, setSelected] = useState(getDefaultValue());

  const onSelect = (item) => {
    setSelected(item);
    fieldRef.current = item.value;
  };

  useEffect(() => {
    fieldRef.current = selected.value;
  }, []);

  return (
    <Wrapper>
      <Label size='sm' weight='bold'>{label}</Label>
      <GroupButton>
        {
          options.map((item) => (
            <Item active={item.value === selected.value} onClick={() => onSelect(item)} background={item.background}>{item.name}</Item>
          ))
        }
      </GroupButton>
    </Wrapper>
  );
};

export default OptionsGroup;
