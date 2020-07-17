import { post } from 'axios';
import Cookie from 'js-cookie';
import { takeLatest, call, put } from 'redux-saga/effects';
import { onOpenAlert } from 'redux/alert';
import Router from 'next/router';

export const ON_LOGIN = 'ON_LOGIN';
export const ON_SIGN_UP = 'ON_SIGN_UP';

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
    Cookie.set('__gigtype', response.userType);
    Router.push('/gig-seeker/profile');
  } catch (error) {
    console.log(error);
    if (error.status === 401) {
      yield put(onOpenAlert('Wrong email or password!'));
    } else if (error.status === 403) {
      Router.push('/resend-verification');
    } else {
      yield put(onOpenAlert(error.data.message));
    }
  }
}

export const onLogin = (params, callback) => ({
  type: ON_LOGIN, params, callback,
});

export const onSignUp = (params, callback) => ({
  type: ON_SIGN_UP, params, callback,
});

export default function* authenticationWatcher() {
  yield takeLatest(ON_LOGIN, login);
  yield takeLatest(ON_SIGN_UP, signUp);
}
