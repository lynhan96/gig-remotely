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

function* deleteGig({ id, callback }) {
  try {
    yield call(axiosDelete, `/job/${id}`);
    if (callback) callback();
  } catch (error) {
    console.log('------------------------')
    console.log(error)
    // yield put(onOpenAlert(error.data.message));
  }
}

function* postGig({ params, paymentIntentId }) {
  try {
    const response = yield call(post, '/job', params);

    axios.post(`/job/${response.id}/payment-intent`, { paymentIntentId }).then((a) => {
      Router.push('/gig-submitted');
    });
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

export const onGetCompanyProfile = (id, setState) => ({
  type: ON_GET_COMPANY_PROFILE, id, setState,
});

export const onGetCompanies = (callback) => ({
  type: ON_GET_COMPANIES, callback,
});

export const onUpdateCompanyProfile = (params) => ({
  type: ON_UPDATE_COMPANY_PROFILE, params,
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

export default function* companyWatcher() {
  yield takeLatest(ON_GET_COMPANIES, getCompanies);
  yield takeLatest(ON_GET_COMPANY_PROFILE, getCompanyProfile);
  yield takeLatest(ON_UPDATE_COMPANY_PROFILE, updateCompanyProfile);
  yield takeLatest(ON_GET_COMPANY_GIGS, getOwnedGig);
  yield takeLatest(ON_COMPANY_POST_GIG, postGig);
  yield takeLatest(ON_COMPANY_DELETE_GIG, deleteGig);
}
