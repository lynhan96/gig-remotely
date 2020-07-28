import React, { useRef } from 'react';
import { Button, Input } from 'components/global';
import { Wrapper, InputWrapper, StyledRadioGroup } from './styles';

const radioOptions = [
  {
    label: 'Freelance',
    name: 'FREELANCE',
  },
  {
    label: 'Part Time',
    name: 'PART_TIME',
  },
  {
    label: 'Full Time',
    name: 'FULL_TIME',
  },
];
const SearchForm = ({ onSearch, keyword, option }) => {
  const searchValue = useRef({ keyword, option });

  const onChange = (e) => {
    searchValue.current.keyword = e.target.value;
    console.log(e.target.value)
  };

  const onChangeRadio = (values) => {
    searchValue.current.option = values.name;
  };

  const search = () => {
    onSearch({ keyword: searchValue.current.keyword, option: searchValue.current.option });
  };

  return (
    <Wrapper>
      <InputWrapper>
        <Input defaultValue={keyword} onChange={onChange} placeholder='Type in a keyword…' />
        <StyledRadioGroup
          defaultValue={option}
          items={radioOptions}
          onChange={onChangeRadio}
        />
      </InputWrapper>
      <div>
        <Button width='160px' onClick={search}>search</Button>
      </div>
    </Wrapper>
  );
};

export default SearchForm;
