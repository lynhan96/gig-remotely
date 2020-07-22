import { post, get } from 'axios';
import Cookie from 'js-cookie';
import { takeLatest, call, put } from 'redux-saga/effects';
import { onOpenAlert } from 'redux/alert';
import Router from 'next/router';

const ON_LOGIN = 'ON_LOGIN';
const ON_SIGN_UP = 'ON_SIGN_UP';
const ON_VERIFY_EMAIL = 'ON_VERIFY_EMAIL';

function* verificationEmail({ id }) {
  try {
    yield call(get, `/users/confirm-email?id=${id}`);
    Cookie.set('__gigtoken', id);
    Router.push('/setup-account');
  } catch (error) {
    if (error.status === 401) {
      Router.push('/resend-verification');
    }
  }
}

function* signUp({ params, callback }) {
  try {
    const response = yield call(post, '/users', params);
    callback(response);
  } catch (error) {
    yield put(onOpenAlert(error.data.message));
  }
}

function* login({ params }) {
  try {
    const response = yield call(post, '/users/login', params);

    Cookie.set('__gigtoken', response.access_token);
    if (!response.userType) {
      Router.push('/setup-account');
    } else if (response.userType === 'TALENT') {
      Cookie.set('__gigtype', response.userType);
      Router.push('/gig-seeker/profile');
    } else if (response.userType === 'COMPANY') {
      Cookie.set('__gigtype', response.userType);
      Router.push('/company/profile');
    }
  } catch (error) {
    if (error.status === 401) {
      yield put(onOpenAlert('Wrong email or password!'));
    } else if (error.status === 403) {
      Router.push('/resend-verification');
    } else {
      yield put(onOpenAlert(error.data.message));
    }
  }
}

export const onVerifyEmail = (id) => ({
  type: ON_VERIFY_EMAIL, id,
});

export const onLogin = (params, callback) => ({
  type: ON_LOGIN, params, callback,
});

export const onSignUp = (params, callback) => ({
  type: ON_SIGN_UP, params, callback,
});

export default function* authenticationWatcher() {
  yield takeLatest(ON_LOGIN, login);
  yield takeLatest(ON_SIGN_UP, signUp);
  yield takeLatest(ON_VERIFY_EMAIL, verificationEmail);
}
