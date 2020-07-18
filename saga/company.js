import { get } from 'axios';
import { takeLatest, call } from 'redux-saga/effects';

const ON_GET_COMPANIES = 'ON_GET_COMPANIES';
const ON_GET_COMPANY_PROFILE = 'ON_GET_COMPANY_PROFILE';

function* getCompanies({ callback }) {
  try {
    const response = yield call(get, '/company');

    callback(response);
  } catch (error) {
    console.error(error);
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

export default function* companyWatcher() {
  yield takeLatest(ON_GET_COMPANIES, getCompanies);
  yield takeLatest(ON_GET_COMPANY_PROFILE, getCompanyProfile);
}
