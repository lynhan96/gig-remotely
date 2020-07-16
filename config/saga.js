import { all } from 'redux-saga/effects';
import jobWatcher from 'saga/jobs';
import authenticationWatcher from 'saga/authentication';

export default function* saga() {
  yield all([
    jobWatcher(),
    authenticationWatcher(),
  ]);
}
