import React, {
  useState, useEffect, useContext, useImperativeHandle,
} from 'react';

import {
  FileInputLabel,
  FileInput,
  Options,
  Option,
  FileSelectWrapper,
  SelectWrapper,
  SearchField,
  SearchInnputField,
  Icon,
  FieldIcon,
} from './styles';

const FormSelect = React.forwardRef(({
  name, label, defaultValue, options, context,
}, ref) => {
  const [seletedValue, setSeletedValue] = useState(defaultValue || options[0]);
  const [open, setOpen] = useState(false);
  const [selectOptions, setSelectOptions] = useState(options);
  const { valuesRef } = useContext(context);
  const selectBoxId = 'select-field';

  useImperativeHandle(ref, () => ({
    reset: () => {
      setSeletedValue(defaultValue);
      setOpen(false);
    },
  }));

  const onSelect = (value) => {
    setSeletedValue(value);
    setOpen(false);
    valuesRef.current[name] = value;
  };

  const onSearch = (e) => {
    const keyword = e.target.value;
    const newOptions = options.filter((i) => i.toLowerCase().includes(keyword.toLowerCase()));
    setSelectOptions(newOptions);
  };
  const outSizeClick = (e) => {
    const element = document.getElementById(selectBoxId);

    if (element === null) return;
    if (!element && !element.contains(e.target)) setOpen(false);
  };

  useEffect(() => {
    valuesRef.current[name] = seletedValue;

    const selectOutSizeToggle = window.addEventListener('click', outSizeClick);

    return () => {
      window.removeEventListener('click', selectOutSizeToggle);
    };
  }, []);

  return (
    <FileSelectWrapper id={selectBoxId}>
      <FileInputLabel>{label}</FileInputLabel>
      <FileInput onClick={() => setOpen(!open)}>
        {seletedValue}
        <FieldIcon src='/images/icon/input-select.svg' />
      </FileInput>
      <SelectWrapper className={ open ? 'open-select' : 'close-select'}>
        <SearchField className={ open ? 'open-select-search' : 'close-select-search'}>
          <SearchInnputField placeholder='Type in keyword' onChange={onSearch} />
          <Icon src='/images/icon/search.svg' />
        </SearchField>
        <Options>
          {
            selectOptions.map((item) => (
              <Option key={item} active={item === seletedValue} onClick={() => onSelect(item)}>{item}</Option>
            ))
          }
        </Options>
      </SelectWrapper>

    </FileSelectWrapper>
  );
});

export default FormSelect;
