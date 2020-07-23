import { get, post, put as axiosPut } from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { onOpenAlert } from 'redux/alert';
import { onUpdateUserCompany } from 'redux/user';

const ON_GET_COMPANIES = 'ON_GET_COMPANIES';
const ON_GET_COMPANY_PROFILE = 'ON_GET_COMPANY_PROFILE';
const ON_UPDATE_COMPANY_PROFILE = 'ON_UPDATE_COMPANY_PROFILE';
const ON_GET_COMPANY_GIGS = 'ON_GET_COMPANY_GIGS';
const ON_COMPANY_POST_GIG = 'ON_COMPANY_POST_GIG';

function* updateCompanyProfile({ params }) {
  try {
    const response = yield call(axiosPut, '/company', params);

    yield put(onUpdateUserCompany(response));
    yield put(onOpenAlert('Your profile has successfully changed'));
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

function* postGig({ params }) {
  try {
    yield call(post, '/job', params);

  } catch (error) {
    console.log(error)
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

export const onGetCompanyProfile = (id, setState) => ({
  type: ON_GET_COMPANY_PROFILE, id, setState,
});

export const onGetCompanies = (callback) => ({
  type: ON_GET_COMPANIES, callback,
});

export const onUpdateCompanyProfile = (params) => ({
  type: ON_UPDATE_COMPANY_PROFILE, params,
});

export const onPostGig = (params) => ({
  type: ON_COMPANY_POST_GIG, params,
});

export const onGetOwnedGigs = (setState) => ({
  type: ON_GET_COMPANY_GIGS, setState,
});

export default function* companyWatcher() {
  yield takeLatest(ON_GET_COMPANIES, getCompanies);
  yield takeLatest(ON_GET_COMPANY_PROFILE, getCompanyProfile);
  yield takeLatest(ON_UPDATE_COMPANY_PROFILE, updateCompanyProfile);
  yield takeLatest(ON_GET_COMPANY_GIGS, getOwnedGig);
  yield takeLatest(ON_COMPANY_POST_GIG, postGig);
}
