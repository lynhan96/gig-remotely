import React, {
  useState, useContext, useCallback, useImperativeHandle, useEffect,
} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { onGetUploadFile } from 'saga/upload';

import {
  PhotoInputWrapper,
  PhotoWrapper,
  Image,
  Upload,
  PhotoLabel,
} from './styles';

const FormPhoto = React.forwardRef(({
  name, label, defaultValue, context,
}, ref) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(defaultValue);
  const { valuesRef } = useContext(context);

  useImperativeHandle(ref, () => ({
    reset: () => {
      setImage(defaultValue);
    },
  }));

  const uploadFile = useCallback((filename, type, callback) => dispatch(
    onGetUploadFile(filename, type, callback),
  ), [dispatch]);

  const uploadFileCallback = ({imageUrl}) => {
    setImage(imageUrl);
    valuesRef.current[name] = imageUrl;
  };

  const onChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    uploadFile(file, uploadFileCallback);
  };

  useEffect(() => {
    valuesRef.current[name] = image;
  }, []);

  return (
    <PhotoInputWrapper>
      <PhotoWrapper>
        <Image src={image || '/images/icon/upload.svg'} hasImage={image} />
      </PhotoWrapper>
      <Upload type='file' onChange={onChange} />
      <PhotoLabel>{label}</PhotoLabel>
    </PhotoInputWrapper>
  );
});

export default FormPhoto;
