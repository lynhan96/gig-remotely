import { post, get, put as axiosPut } from 'axios';
import Cookie from 'js-cookie';
import { takeLatest, call, put } from 'redux-saga/effects';
import { onOpenAlert } from 'redux/alert';
import Router from 'next/router';

const ON_LOGIN = 'ON_LOGIN';
const ON_SIGN_UP = 'ON_SIGN_UP';
const ON_VERIFY_EMAIL = 'ON_VERIFY_EMAIL';
const ON_SEND_RESET_PASSWORD_LINK = 'ON_SEND_RESET_PASSWORD_LINK';
const ON_RESET_PASSWORD = 'ON_RESET_PASSWORD';
const ON_RENSEND_VERIFICATION = 'ON_RENSEND_VERIFICATION';
const ON_SERVICE_LOGIN = 'ON_SERVICE_LOGIN';
const ON_LOGIN_WITH_LINKED_IN = 'ON_LOGIN_WITH_LINKED_IN';

const afterLogin = (response) => {
  Cookie.set('__gigtoken', response.access_token);
  if (!response.userType) {
    Router.push('/setup-account');
    Cookie.set('__gigtype', 'INVIDUAL');
  } else if (response.userType === 'TALENT') {
    Cookie.set('__gigtype', response.userType);
    if (Cookie.get('__lastApplyGigJob')) {
      Router.push('/gigs/[id]', Cookie.get('__lastApplyGigJob'));
    } else {
      Router.push('/gig-seeker/profile');
    }
  } else if (response.userType === 'COMPANY') {
    Cookie.set('__gigtype', response.userType);
    if (Cookie.get('__appllicantJobUrl')) {
      Router.push(Cookie.get('__appllicantJobUrl'));
    } else {
      Router.push('/company/profile');
    }
  }
};

function* resendEmailVerification({ email, setState }) {
  try {
    yield call(post, '/users/resend-email-verification', { email });
    Router.push('/login');
    yield put(onOpenAlert("We've sent you the verification email. Please see your inbox."));
  } catch (error) {
    if (error.status === 404) {
      yield put(onOpenAlert('It looks like this email has not been registered on GigRemotely.'));
    } else {
      yield put(onOpenAlert(error.data.message));
    }
  }

  setState(false);
}

function* sendResetPasswordLink({ params, callback }) {
  try {
    yield call(post, '/users/forgot-password', params);
    callback(200);
  } catch (error) {
    callback(400);

    if (error.status === 404) {
      yield put(onOpenAlert('It looks like this email has not been registered on GigRemotely.'));
    } else {
      yield put(onOpenAlert(error.data.message));
    }
  }
}

function* resetPassword({ params, callback }) {
  try {
    yield call(axiosPut, '/users/forgot-password', params);

    yield put(onOpenAlert("We've successfully changed your password"));
    Router.push('/login');
  } catch (error) {
    callback(400);
    yield put(onOpenAlert(error.data.message));
  }
}

function* verificationEmail({ id }) {
  try {
    const respone = yield call(get, `/users/confirm-email?id=${id}`);

    Cookie.set('__gigtoken', respone.access_token);
    Cookie.set('__gigtype', 'INVIDUAL');
    Router.push('/setup-account');
  } catch (error) {
    if (error.status === 401) {
      yield put(onOpenAlert(error.data.message));
      Router.push('/login');
    }
  }
}

function* signUp({ params, callback }) {
  try {
    const response = yield call(post, '/users', params);
    callback(response);
  } catch (error) {
    if (error.status === 403) {
      Router.push({
        pathname: '/resend-verification',
        query: {
          email: params.email,
        },
      });
    } else if (error.status === 409) {
      yield put(onOpenAlert('It looks like this email has not been registered on GigRemotely.'));
    } else {
      yield put(onOpenAlert(error.data.message));
    }
  }
}

function* loginWithLinkedin({ params, callback }) {
  try {
    const response = yield call(post, '/users/linkedin-login', params);

    afterLogin(response);
  } catch (error) {
    if (error.status === 401) {
      yield put(onOpenAlert('Oops! This is an invalid login. Please try again or request a password reset.'));
    } else {
      yield put(onOpenAlert(error.data.message));
    }

    callback();
  }
}

function* serviceLogin({ params, callback }) {
  try {
    const response = yield call(post, '/users/service-login', params);

    afterLogin(response);
  } catch (error) {
    if (error.status === 401) {
      yield put(onOpenAlert('Oops! This is an invalid login. Please try again or request a password reset.'));
    } else {
      yield put(onOpenAlert(error.data.message));
    }

    callback();
  }
}

function* login({ params }) {
  try {
    const response = yield call(post, '/users/login', params);

    afterLogin(response);
  } catch (error) {
    if (error.status === 401) {
      yield put(onOpenAlert('Oops! This is an invalid login. Please try again or request a password reset.'));
    } else if (error.status === 403) {
      Router.push({
        pathname: '/resend-verification',
        query: {
          email: params.username,
        },
      });
    } else {
      yield put(onOpenAlert(error.data.message));
    }
  }
}

export const onVerifyEmail = (id) => ({
  type: ON_VERIFY_EMAIL, id,
});

export const onResendEmailVerification = (email, setState) => ({
  type: ON_RENSEND_VERIFICATION, email, setState,
});

export const onLogin = (params, callback) => ({
  type: ON_LOGIN, params, callback,
});

export const onSignUp = (params, callback) => ({
  type: ON_SIGN_UP, params, callback,
});

export const onSendResetPassword = (params, callback) => ({
  type: ON_SEND_RESET_PASSWORD_LINK, params, callback,
});

export const onResetPassword = (params, callback) => ({
  type: ON_RESET_PASSWORD, params, callback,
});

export const onServiceLogin = (params, callback) => ({
  type: ON_SERVICE_LOGIN, params, callback,
});

export const onLoginWithLinkedin = (params, callback) => ({
  type: ON_LOGIN_WITH_LINKED_IN, params, callback,
});

export default function* authenticationWatcher() {
  yield takeLatest(ON_LOGIN, login);
  yield takeLatest(ON_SIGN_UP, signUp);
  yield takeLatest(ON_VERIFY_EMAIL, verificationEmail);
  yield takeLatest(ON_SEND_RESET_PASSWORD_LINK, sendResetPasswordLink);
  yield takeLatest(ON_RESET_PASSWORD, resetPassword);
  yield takeLatest(ON_RENSEND_VERIFICATION, resendEmailVerification);
  yield takeLatest(ON_SERVICE_LOGIN, serviceLogin);
  yield takeLatest(ON_LOGIN_WITH_LINKED_IN, loginWithLinkedin);
}
