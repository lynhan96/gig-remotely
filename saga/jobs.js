import { get } from 'axios';
import { takeLatest, call } from 'redux-saga/effects';

export const ON_GET_JOBS = 'ON_GET_JOBS';

function* getJobs({ params, callback }) {
  try {
    const response = yield call(get, '/job');

    callback(response);
  } catch (error) {
    console.error(error);
  }
}

export const onGetJobs = (params, callback) => ({
  type: ON_GET_JOBS, params, callback,
});

export default function* accountSettingWatcher() {
  yield takeLatest(ON_GET_JOBS, getJobs);
}
