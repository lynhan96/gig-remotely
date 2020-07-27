import {
  delete as axiosDelete, post, get, put as axiosPut,
} from 'axios';
import Cookie from 'js-cookie';
import { takeLatest, call, put } from 'redux-saga/effects';
import { onOpenAlert } from 'redux/alert';
import { onUpdateProfile, onUpdateTalent, onUpdateUserAccountSetting } from 'redux/user';
import Router from 'next/router';

const ON_UPDATE_USER_TYPE = 'ON_UPDATE_USER_TYPE';
const ON_GET_MY_GIGS = 'ON_GET_MY_GIGS';
const ON_GET_MY_PROFILE = 'ON_GET_MY_PROFILE';
const ON_ADD_FAVORITE_JOB = 'ON_ADD_FAVORITE_JOB';
const ON_REMOVE_FAVORITE_JOB = 'ON_REMOVE_FAVORITE_JOB';
const ON_UPDATE_TALENT = 'ON_UPDATE_TALENT';
const ON_UPDATE_PASSWORD = 'ON_UPDATE_PASSWORD';
const ON_UPDATE_ACCOUNT_SETTING = 'ON_UPDATE_ACCOUNT_SETTING';

function* updatePassword({ params }) {
  try {
    yield call(axiosPut, '/users/password', params);

    yield put(onOpenAlert('Your password has successfully changed'));
    Router.push('/company/account-setting');
  } catch (error) {
    if (error.data.statusCode) {
      yield put(onOpenAlert('Incorrect current password'));
    } else {
      yield put(onOpenAlert(error.data.message));
    }
  }
}

function* updateAccountSetting({ params, callback }) {
  try {
    const response = yield call(axiosPut, '/users/account-setting', params);

    callback();
    yield put(onOpenAlert('Your account setting has successfully changed'));
    yield put(onUpdateUserAccountSetting({
      name: params.companyName,
      applyNotification: response.applyNotification,
      boostAboutToEnd: response.boostAboutToEnd,
      boostEnded: response.boostEnded,
      listingAboutToExpire: response.listingAboutToExpire,
      listingExpired: response.listingExpired,
      promotionalUpdates: response.promotionalUpdates,
    }));
  } catch (error) {
    yield put(onOpenAlert(error.data.message));
  }
}

function* updateUserType({ userType }) {
  try {
    yield call(axiosPut, '/users/user-type', { userType });

    Cookie.set('__gigtype', userType);
    if (userType === 'TALENT') {
      Router.push('/gig-seeker/edit-profile');
    } else if (userType === 'COMPANY') {
      Router.push('/company/edit-profile');
    }
  } catch (error) {
    yield put(onOpenAlert(error.data.message));
  }
}

function* getMyProfile({ flag }) {
  try {
    const response = yield call(get, '/users/profile');
    flag.current = true;
    Cookie.set('__gigtype', response.userType);
    yield put(onUpdateProfile(response));
  } catch (error) {
    Router.push('/login');
  }
}

function* addFavoritJob({ jobId, setState }) {
  try {
    yield call(post, `/job/${jobId}/favorite`);

    setState(true);
  } catch (error) {
    yield put(onOpenAlert(error.data.message));
  }
}

function* removeFavoritJob({ jobId, setState }) {
  try {
    yield call(axiosDelete, `/job/${jobId}/favorite`);

    setState(false);
  } catch (error) {
    yield put(onOpenAlert(error.data.message));
  }
}

function* updateUserProfile({ params }) {
  try {
    const response = yield call(axiosPut, '/talent', params);

    yield put(onUpdateTalent(response));
    yield put(onOpenAlert('Your profile has successfully changed'));
  } catch (error) {
    yield put(onOpenAlert(error.data.message));
  }
}

function* getMyGigs({ setState }) {
  try {
    const response = yield call(get, '/job/mine');

    const all = response;
    const applied = response.filter((i) => i.jobApplication);
    const unapplied = response.filter((i) => !i.jobApplication);
    const expired = response.filter((i) => i.job.status === 'EXPIRED');
    setState({
      loading: false,
      data: {
        applied, unapplied, all, expired,
      },
    });
  } catch (error) {
    yield put(onOpenAlert(error.data.message));
  }
}

export const onUpdateUserProfile = (params) => ({
  type: ON_UPDATE_TALENT, params,
});

export const onUpdateUserType = (userType) => ({
  type: ON_UPDATE_USER_TYPE, userType,
});

export const onGetMyGigs = (setState) => ({
  type: ON_GET_MY_GIGS, setState,
});

export const onAddFavoriteJob = (jobId, setState) => ({
  type: ON_ADD_FAVORITE_JOB, jobId, setState,
});

export const onRemoveFavoriteJob = (jobId, setState) => ({
  type: ON_REMOVE_FAVORITE_JOB, jobId, setState,
});

export const onGetMyProfile = (flag) => ({
  type: ON_GET_MY_PROFILE, flag,
});

export const onUpdateAccountSetting = (params, callback) => ({
  type: ON_UPDATE_ACCOUNT_SETTING, params, callback,
});

export const onUpdatePassword = (params) => ({
  type: ON_UPDATE_PASSWORD, params,
});

export default function* userWatcher() {
  yield takeLatest(ON_UPDATE_USER_TYPE, updateUserType);
  yield takeLatest(ON_GET_MY_GIGS, getMyGigs);
  yield takeLatest(ON_GET_MY_PROFILE, getMyProfile);
  yield takeLatest(ON_ADD_FAVORITE_JOB, addFavoritJob);
  yield takeLatest(ON_REMOVE_FAVORITE_JOB, removeFavoritJob);
  yield takeLatest(ON_UPDATE_TALENT, updateUserProfile);
  yield takeLatest(ON_UPDATE_ACCOUNT_SETTING, updateAccountSetting);
  yield takeLatest(ON_UPDATE_PASSWORD, updatePassword);
}
