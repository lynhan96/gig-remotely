import axios, { get } from 'axios';
import { takeLatest, call } from 'redux-saga/effects';
import { s3Url } from 'constant';

const ON_UPLOAD_FILE_TO_S3 = 'ON_UPLOAD_FILE_TO_S3';

function* uploadFile({ file, callback }) {
  try {
    const filename = `${Math.round((new Date()).getTime() / 1000)}-${file.name}`;
    const response = yield call(get, `/upload-signed-url?filename=${filename}&contentType=${file.type}`);

    const options = {
      headers: {
        'Content-Type': file.type,
      },
    };

    const instance = axios.create();
    delete instance.defaults.headers.common.Authorization;
    instance.put(response.signedUrl, file, options).then(() => {
      callback(
        {
          filename: response.filename,
          imageUrl: `${s3Url}${response.filename}`,
        },
      );
    }).catch((err) => {
      console.error(err);
    });
  } catch (error) {
    console.error(error);
  }
}

export const onGetUploadFile = (file, callback) => ({
  type: ON_UPLOAD_FILE_TO_S3, file, callback,
});

export default function* companyWatcher() {
  yield takeLatest(ON_UPLOAD_FILE_TO_S3, uploadFile);
}
