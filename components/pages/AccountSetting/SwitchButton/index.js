import React, { useState } from 'react';
import {
  Item, Label, SwitchButton, Circle,
} from './styles';

const EditCompanyProfile = ({ label, fieldRef, defaultValue }) => {
  const [enabled, setEnable] = useState(defaultValue || false);

  const toggle = () => {
    fieldRef.current = !enabled;
    setEnable(!enabled);
  };

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
