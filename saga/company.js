import axios, {
  get, post, put as axiosPut, delete as axiosDelete,
} from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { onOpenAlert } from 'redux/alert';
import { onUpdateUserCompany } from 'redux/user';
import Router from 'next/router';

const ON_GET_COMPANIES = 'ON_GET_COMPANIES';
const ON_GET_COMPANY_PROFILE = 'ON_GET_COMPANY_PROFILE';
const ON_UPDATE_COMPANY_PROFILE = 'ON_UPDATE_COMPANY_PROFILE';
const ON_GET_COMPANY_GIGS = 'ON_GET_COMPANY_GIGS';
const ON_COMPANY_POST_GIG = 'ON_COMPANY_POST_GIG';
const ON_COMPANY_DELETE_GIG = 'ON_COMPANY_DELETE_GIG';
const ON_COMPANY_UPDATE_GIG = 'ON_COMPANY_UPDATE_GIG';
const ON_COMPANY_UPDATE_SHORT_LISTED = 'ON_COMPANY_UPDATE_SHORT_LISTED';

function* updateCompanyProfile({ params }) {
  try {
    const response = yield call(axiosPut, '/company', params);

    yield put(onUpdateUserCompany(response));
    yield put(onOpenAlert("We've successfully changed your profile"));
    Router.push('/company/profile');
  } catch (error) {
    yield put(onOpenAlert(error.data.message));
  }
}

function* getCompanies({ callback }) {
  try {
    const response = yield call(get, '/company');

    callback(response);
  } catch (error) {
    console.error(error);
  }
}

function* updateGig({ id, params, callback }) {
  try {
    yield call(axiosPut, `/job/${id}`, params);
    yield put(onOpenAlert("We've successfully changed your post"));
    if (callback) callback();
  } catch (error) {
    yield put(onOpenAlert(error.data.message));
  }
}

function* deleteGig({ id, callback }) {
  try {
    yield call(axiosDelete, `/job/${id}`);
    if (callback) callback();
  } catch (error) {
    yield put(onOpenAlert(error.data.message));
  }
}

function* postGig({ params, paymentIntentId }) {
  try {
    params.paymentIntentId = paymentIntentId;
    yield call(post, '/job', params);

    Router.push('/gig-submitted');
  } catch (error) {
    yield put(onOpenAlert(error.data.message));
  }
}

function* getOwnedGig({ setState }) {
  try {
    const response = yield call(get, '/job/mine');

    const all = response;
    const active = response.filter((i) => i.status === 'ACTIVE');
    const expired = response.filter((i) => i.status === 'EXPIRED');
    setState({
      loading: false,
      data: {
        active, all, expired,
      },
    });
  } catch (error) {
    yield put(onOpenAlert(error.data.message));
  }
}

function* getCompanyProfile({ id, setState }) {
  try {
    const response = yield call(get, `/company/${id}`);

    setState({ loading: false, data: response });
  } catch (error) {
    console.error(error);
  }
}

function* updateApplicantSortListed({ id, shortListed, callback }) {
  try {
    const response = yield call(axiosPut, `/job/application/${id}/shortlisted`, { shortlisted: shortListed });
    callback(response, shortListed);
  } catch (error) {
    yield put(onOpenAlert(error.data.message));
  }
}

export const onGetCompanyProfile = (id, setState) => ({
  type: ON_GET_COMPANY_PROFILE, id, setState,
});

export const onGetCompanies = (callback) => ({
  type: ON_GET_COMPANIES, callback,
});

export const onUpdateCompanyProfile = (params) => ({
  type: ON_UPDATE_COMPANY_PROFILE, params,
});

export const onUpdateGig = (id, params, callback) => ({
  type: ON_COMPANY_UPDATE_GIG, id, params, callback,
});

export const onPostGig = (params, paymentIntentId) => ({
  type: ON_COMPANY_POST_GIG, params, paymentIntentId,
});

export const onGetOwnedGigs = (setState) => ({
  type: ON_GET_COMPANY_GIGS, setState,
});

export const onDeleteGig = (id, callback) => ({
  type: ON_COMPANY_DELETE_GIG, id, callback,
});

export const onUpdateApplicantSortListed = (id, shortListed, callback) => ({
  type: ON_COMPANY_UPDATE_SHORT_LISTED, id, shortListed, callback,
});

export default function* companyWatcher() {
  yield takeLatest(ON_GET_COMPANIES, getCompanies);
  yield takeLatest(ON_GET_COMPANY_PROFILE, getCompanyProfile);
  yield takeLatest(ON_UPDATE_COMPANY_PROFILE, updateCompanyProfile);
  yield takeLatest(ON_GET_COMPANY_GIGS, getOwnedGig);
  yield takeLatest(ON_COMPANY_POST_GIG, postGig);
  yield takeLatest(ON_COMPANY_DELETE_GIG, deleteGig);
  yield takeLatest(ON_COMPANY_UPDATE_GIG, updateGig);
  yield takeLatest(ON_COMPANY_UPDATE_SHORT_LISTED, updateApplicantSortListed);
}
