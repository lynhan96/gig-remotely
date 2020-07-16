import { post } from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { onOpenAlert } from 'redux/alert';

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

function* login({ params, callback }) {
  try {
    const response = yield call(post, '/users/login', params);

    localStorage.setItem('access_token', response.access_token);
    localStorage.setItem('user_type', 'SEEKER');
    callback();
  } catch (error) {
    yield put(onOpenAlert('Wrong email or password!'));
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
