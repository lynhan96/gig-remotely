import { all } from 'redux-saga/effects';
import jobWatcher from 'saga/jobs';
import authenticationWatcher from 'saga/authentication';
import userWatcher from 'saga/user';
import companyWatcher from 'saga/company';

export default function* saga() {
  yield all([
    jobWatcher(),
    authenticationWatcher(),
    userWatcher(),
    companyWatcher(),
  ]);
}
