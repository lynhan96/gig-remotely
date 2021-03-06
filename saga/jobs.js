import { get, post } from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { onOpenAlert } from 'redux/alert';
import Router from 'next/router';
import Cookie from 'js-cookie';

const ON_GET_JOBS = 'ON_GET_JOBS';
const ON_GET_JOB_CATEGORIES = 'ON_GET_JOB_CATEGORIES';
const ON_GET_JOB_DETAIL = 'ON_GET_JOB_DETAIL';
const ON_APPLY_JOB = 'ON_APPLY_JOB';
const ON_GET_JOB_APPLICANT = 'ON_GET_JOB_APPLICANT';

function* getJobDetail({ params, setState }) {
  try {
    let url = `/job/${params.id}`;
    if (params.repostJob) url += `?repostJob=${params.repostJob}`;
    if (params.detail) url += `?detail=${params.detail}`;

    const response = yield call(get, url);
    setState({ loading: false, data: response });
  } catch (error) {
    if (error.status === 404 && Cookie.get('__gigtype') === 'TALENT') {
      Router.push('/gig-seeker/edit-profile');
      yield put(onOpenAlert('Please complete your profile!'));
    } else {
      yield put(onOpenAlert(error.data.message));
    }
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
    let url = params.limit ? `/job?limit=${params.limit}` : '/job?limit=10';

    if (params.page) url += `&page=${params.page}`;
    if (params.keyword) url += `&keyword=${params.keyword}`;
    if (params.type) url += `&type=${params.type}`;
    const response = yield call(get, url);
    callback(response);
  } catch (error) {
    console.error(error);
  }
}

function* getJobApplicant({ id, setState }) {
  try {
    const response = yield call(get, `/job/${id}/applicants`);

    setState({ loading: false, data: response });
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

export const onGetJobDetail = (params, setState) => ({
  type: ON_GET_JOB_DETAIL, params, setState,
});

export const onGetJobs = (params, callback) => ({
  type: ON_GET_JOBS, params, callback,
});

export const onGetJobCategories = (setState) => ({
  type: ON_GET_JOB_CATEGORIES, setState,
});

export const onGetJobApplicant = (id, setState) => ({
  type: ON_GET_JOB_APPLICANT, id, setState,
});

export default function* accountSettingWatcher() {
  yield takeLatest(ON_GET_JOBS, getJobs);
  yield takeLatest(ON_GET_JOB_CATEGORIES, getJobCategories);
  yield takeLatest(ON_GET_JOB_DETAIL, getJobDetail);
  yield takeLatest(ON_APPLY_JOB, applyJob);
  yield takeLatest(ON_GET_JOB_APPLICANT, getJobApplicant);
}
