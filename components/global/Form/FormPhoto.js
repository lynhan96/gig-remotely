import React, {
  useState, useContext, useCallback, useImperativeHandle,
} from 'react';
import { useDispatch } from 'react-redux';
import { onGetS3Url } from 'saga/upload';
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
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
    };
    reader.readAsDataURL(file);
    valuesRef.current[name] = defaultValue;
  };

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
