import { all } from 'redux-saga/effects';
import jobWatcher from 'saga/jobs';

export default function* saga() {
  yield all([
    jobWatcher(),
  ]);
}
