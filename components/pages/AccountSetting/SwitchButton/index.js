import React, { useState, useEffect } from 'react';
import {
  Item, Label, SwitchButton, Circle,
} from './styles';

const EditCompanyProfile = ({
  label, fieldRef, defaultValue, canEdit,
}) => {
  const [enabled, setEnable] = useState(defaultValue);

  const toggle = () => {
    if (!canEdit) return;
    fieldRef.current = !enabled;
    setEnable(!enabled);
  };

  useEffect(() => {
    setEnable(defaultValue);
    fieldRef.current = defaultValue;
  }, [defaultValue]);

  return (
    <Item>
      <Label>{label}</Label>
      <SwitchButton onClick={toggle} className={enabled ? 'active-switch' : ''}>
        <Circle className={enabled ? 'active-switch-icon' : ''} />
      </SwitchButton>
    </Item>
  );
};

export default EditCompanyProfile;
