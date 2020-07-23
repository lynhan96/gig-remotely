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
  const getDefaultValue = () => {
    let defaultOption = options.filter((i) => i.value === defaultValue)[0];
    if (!defaultOption) defaultOption = options[0];
    return defaultOption;
  };

  const [seleted, setSeleted] = useState(getDefaultValue());
  const [open, setOpen] = useState(false);
  const [selectOptions, setSelectOptions] = useState(options);
  const { valuesRef } = useContext(context);
  const selectBoxId = 'select-field';

  useImperativeHandle(ref, () => ({
    reset: () => {
      setSeleted(getDefaultValue());
      setOpen(false);
    },
  }));

  const onSelect = (item) => {
    setSeleted(item);
    setOpen(false);
    valuesRef.current[name] = item.value;
  };

  const onSearch = (e) => {
    const keyword = e.target.value;
    const newOptions = options.filter((i) => i.name.toLowerCase().includes(keyword.toLowerCase()));
    setSelectOptions(newOptions);
  };
  const outSizeClick = (e) => {
    const element = document.getElementById(selectBoxId);

    if (element === null) return;
    if (!element && !element.contains(e.target)) setOpen(false);
  };

  useEffect(() => {
    valuesRef.current[name] = seleted.value;

    const selectOutSizeToggle = window.addEventListener('click', outSizeClick);

    return () => {
      window.removeEventListener('click', selectOutSizeToggle);
    };
  }, []);

  return (
    <FileSelectWrapper id={selectBoxId}>
      <FileInputLabel>{label}</FileInputLabel>
      <FileInput onClick={() => setOpen(!open)}>
        {seleted.name}
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
              <Option key={item.value} active={item.value === seleted.value} onClick={() => onSelect(item)}>{item.name}</Option>
            ))
          }
        </Options>
      </SelectWrapper>

    </FileSelectWrapper>
  );
});

export default FormSelect;
