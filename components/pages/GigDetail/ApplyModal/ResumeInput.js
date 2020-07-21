import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  ResumeInputWrapper,
  InputWrapper,
  Icon,
  Label,
  FileName,
  CloseIcon,
} from './styles';

const ResumeInput = () => {
  const [fileName, setFileName] = useState('qweqwe');
  const dispatch = useDispatch();

  const onChange = (e) => {
    console.log(e)
  }

  return (
    <ResumeInputWrapper>
      <InputWrapper>
        <Icon src='/images/icon/document.svg' />
        <Label size='sm' weight='bold'>Attach another document</Label>
        <input type='file' onChange={onChange}/>
      </InputWrapper>
      <FileName>
        {fileName}
        {fileName && <CloseIcon src='/images/icon/close-gray.svg' />}
      </FileName>
    </ResumeInputWrapper>
  );
};

export default ResumeInput;
