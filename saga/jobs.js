import { get } from 'axios';
import { takeLatest, call } from 'redux-saga/effects';

export const ON_GET_JOBS = 'ON_GET_JOBS';
export const ON_GET_JOB_CATEGORIES = 'ON_GET_JOB_CATEGORIES';
export const ON_GET_JOB_DETAIL = 'ON_GET_JOB_DETAIL';

function* getJobDetail({ id, setState }) {
  try {
    const response = yield call(get, `/job/${id}`);

    setState({ loading: false, data: response });
  } catch (error) {
    console.error(error);
  }
}

function* getJobs({ params, callback }) {
  try {
    const url = params.limit ? `/job?limit=${params.limit}` : '/job';
    const response = yield call(get, url);

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

export const onGetJobDetail = (id, setState) => ({
  type: ON_GET_JOB_DETAIL, id, setState,
});

export const onGetJobs = (params, callback) => ({
  type: ON_GET_JOBS, params, callback,
});

export const onGetJobCategories = (setState) => ({
  type: ON_GET_JOB_CATEGORIES, setState,
});

export default function* accountSettingWatcher() {
  yield takeLatest(ON_GET_JOBS, getJobs);
  yield takeLatest(ON_GET_JOB_CATEGORIES, getJobCategories);
  yield takeLatest(ON_GET_JOB_DETAIL, getJobDetail);
}
