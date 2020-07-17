import { get } from 'axios';
import { takeLatest, call } from 'redux-saga/effects';

const ON_GET_COMPANIES = 'ON_GET_COMPANIES';

function* getCompanies({ callback }) {
  try {
    const response = yield call(get, '/company');

    callback(response);
  } catch (error) {
    console.error(error);
  }
}

export const onGetCompanies = (callback) => ({
  type: ON_GET_COMPANIES, callback,
});

export default function* companyWatcher() {
  yield takeLatest(ON_GET_COMPANIES, getCompanies);
}
