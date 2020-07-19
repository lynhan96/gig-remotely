import { get, put as axiosPut } from 'axios';
import { takeLatest, call } from 'redux-saga/effects';

const ON_GET_S3_URL = 'ON_GET_S3_URL';
const ON_UPLOAD_IMAGE = 'ON_UPLOAD_IMAGE';

function* getS3Url({ filename, fileType, callback }) {
  try {
    const response = yield call(get, `/api/s3?filename=${filename}&type=${fileType}`);

    callback(response);
  } catch (error) {
    console.error(error);
  }
}

export const onGetS3Url = (filename, fileType, callback) => ({
  type: ON_GET_S3_URL, filename, fileType, callback,
});

export default function* companyWatcher() {
  yield takeLatest(ON_GET_S3_URL, getS3Url);
}
