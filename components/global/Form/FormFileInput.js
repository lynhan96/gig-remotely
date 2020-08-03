import React, {
  useState, useContext, useCallback, useImperativeHandle, useEffect,
} from 'react';
import { useDispatch } from 'react-redux';
import { onGetUploadFile } from 'saga/upload';

import {
  FileInputWrapper,
  FileInputLabel,
  FileInput,
  FileInputIcon,
  FileInputRemove,
  Upload,
} from './styles';

const FormFileInput = React.forwardRef(({
  name, label, defaultValue, context,
}, ref) => {
  const dispatch = useDispatch();
  const [fileName, setFileName] = useState(defaultValue);
  const { valuesRef } = useContext(context);

  useImperativeHandle(ref, () => ({
    reset: () => {
      setFileName(defaultValue);
    },
  }));

  const uploadFile = useCallback((filename, type, callback) => dispatch(
    onGetUploadFile(filename, type, callback),
  ), [dispatch]);

  const uploadFileCallback = ({ filename }) => {
    setFileName(filename);
    valuesRef.current[name] = filename;
  };

  const onChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    uploadFile(file, uploadFileCallback);
  };

  const removeFile = () => {
    setFileName(null);
    valuesRef.current[name] = '';
  };

  useEffect(() => {
    valuesRef.current[name] = defaultValue;
  }, []);

  return (
    <FileInputWrapper>
      <FileInputLabel>{label}</FileInputLabel>
      <FileInput>
        {fileName}
        <FileInputRemove onClick={removeFile} className={fileName ? 'show-input-label' : 'hide-input-label' }>remove</FileInputRemove>
        <FileInputIcon src='/images/icon/document.svg' />
      </FileInput>
      <Upload type='file' onChange={onChange} />
    </FileInputWrapper>
  );
});

export default FormFileInput;
