import { get } from 'axios';
import { takeLatest, call } from 'redux-saga/effects';

export const ON_GET_JOBS = 'ON_GET_JOBS';
export const ON_GET_JOB_CATEGORIES = 'ON_GET_JOB_CATEGORIES';

function* getJobs({ params, callback }) {
  try {
    const response = yield call(get, '/job');

    callback(response);
  } catch (error) {
    console.error(error);
  }
}

function* getJobCategories({ setState }) {
  try {
    const response = yield call(get, '/skill/categories');

    setState(response);
  } catch (error) {
    console.error(error);
  }
}

export const onGetJobs = (params, callback) => ({
  type: ON_GET_JOBS, params, callback,
});

export const onGetJobCategories = (setState) => ({
  type: ON_GET_JOB_CATEGORIES, setState,
});

export default function* accountSettingWatcher() {
  yield takeLatest(ON_GET_JOBS, getJobs);
  yield takeLatest(ON_GET_JOB_CATEGORIES, getJobCategories);
}
