import { all } from 'redux-saga/effects';
import jobWatcher from 'saga/jobs';
import authenticationWatcher from 'saga/authentication';
import userWatcher from 'saga/user';
import companyWatcher from 'saga/company';
import uploadWatcher from 'saga/upload';
import paymentWatcher from 'saga/payment';
import subPageWatcher from 'saga/sub_page';

export default function* saga() {
  yield all([
    jobWatcher(),
    authenticationWatcher(),
    userWatcher(),
    companyWatcher(),
    uploadWatcher(),
    paymentWatcher(),
    subPageWatcher(),
  ]);
}
