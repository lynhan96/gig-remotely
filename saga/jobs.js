import { get, post } from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { onOpenAlert } from 'redux/alert';

const ON_GET_JOBS = 'ON_GET_JOBS';
const ON_GET_JOB_CATEGORIES = 'ON_GET_JOB_CATEGORIES';
const ON_GET_JOB_DETAIL = 'ON_GET_JOB_DETAIL';
const ON_APPLY_JOB = 'ON_APPLY_JOB';

function* getJobDetail({ id, setState }) {
  try {
    const response = yield call(get, `/job/${id}`);

    setState({ loading: false, data: response });
  } catch (error) {
    console.error(error);
  }
}

function* applyJob({ jobId, params, callback }) {
  try {
    yield call(post, `/job/${jobId}/apply`, params);

    callback(200);
  } catch (error) {
    callback(400);
    yield put(onOpenAlert(error.data.message));
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

export const onApplyJob = (jobId, params, callback) => ({
  type: ON_APPLY_JOB, jobId, params, callback,
});

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
  yield takeLatest(ON_APPLY_JOB, applyJob);
}
