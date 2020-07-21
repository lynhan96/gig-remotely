import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { onGetUploadFile } from 'saga/upload';
import {
  ResumeInputWrapper,
  InputWrapper,
  Icon,
  Label,
  FileName,
  CloseIcon,
} from './styles';

const ResumeInput = ({ onChangeDocument }) => {
  const [fileName, setFileName] = useState('');
  const dispatch = useDispatch();

  const uploadFile = useCallback((filename, type, callback) => dispatch(
    onGetUploadFile(filename, type, callback),
  ), [dispatch]);

  const uploadFileCallback = ({ filename }) => {
    setFileName(filename);
    onChangeDocument(filename);
  };

  const onChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    uploadFile(file, uploadFileCallback);
  };

  const removeFile = () => {
    setFileName('');
    onChangeDocument('');
  };

  return (
    <ResumeInputWrapper>
      <InputWrapper>
        <Icon src='/images/icon/document.svg' />
        <Label size='sm' weight='bold'>Attach another document</Label>
        <input type='file' onChange={onChange} />
      </InputWrapper>
      <FileName>
        {fileName}
        <CloseIcon src='/images/icon/close-gray.svg' className={fileName ? 'show-input-label' : 'hide-input-label'} onClick={removeFile} />
      </FileName>
    </ResumeInputWrapper>
  );
};

export default ResumeInput;
