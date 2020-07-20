import React, {
  useState, useContext, useCallback, useImperativeHandle,
} from 'react';
import { useDispatch } from 'react-redux';
import { onGetS3Url } from 'saga/upload';

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

  const getS3Url = useCallback((filename, type, callback) => dispatch(
    onGetS3Url(filename, type, callback),
  ), [dispatch]);

  const onChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const filename = `${Math.round((new Date()).getTime() / 1000)}-${file.name}`;
    // console.log(filename);
    // getS3Url(filename, file.type, (response) => {
    //   console.log(response);
    // });
    // let presignedUrl = await fetch(
    //   `/api/s3?filename=${filename}&type=${e[i].type}`)
    // let json = await presignedUrl.json()
    // let url = json.signedURL

    // await fetch(url, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': e[i].type,
    //   },
    //   body: e[i],
    // })
    setFileName(filename);
    valuesRef.current[name] = defaultValue;
  };

  const removeFile = () => {
    setFileName(null);
    valuesRef.current[name] = '';
  };

  return (
    <FileInputWrapper>
      <FileInputLabel>{label}</FileInputLabel>
      <FileInput>
        {fileName}
        {fileName && <FileInputRemove onClick={removeFile}>remove</FileInputRemove>}
        <FileInputIcon src='/images/icon/document.svg' />
      </FileInput>
      <Upload type='file' onChange={onChange} />
    </FileInputWrapper>
  );
})

export default FormFileInput;
