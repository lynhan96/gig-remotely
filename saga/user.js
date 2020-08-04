import {
  delete as axiosDelete, post, get, put as axiosPut,
} from 'axios';
import Cookie from 'js-cookie';
import { takeLatest, call, put } from 'redux-saga/effects';
import { onOpenAlert } from 'redux/alert';
import { onUpdateProfile, onUpdateTalent, onUpdateUserAccountSetting, onUpdateUserEmail } from 'redux/user';
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

    yield put(onOpenAlert("We've successfully changed your password"));
    if (Cookie.get('__gigtype') === 'COMPANY') {
      Router.push('/company/account-setting');
    } else {
      Router.push('/gig-seeker/account-setting');
    }
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

    yield put(onOpenAlert("We've successfully changed your account setting"));

    yield put(onUpdateUserEmail(params.newEmail));

    if (response.userType === 'COMPANY') {
      yield put(onUpdateUserAccountSetting({
        name: params.companyName,
        applyNotification: response.applyNotification,
        boostAboutToEnd: response.boostAboutToEnd,
        boostEnded: response.boostEnded,
        listingAboutToExpire: response.listingAboutToExpire,
        listingExpired: response.listingExpired,
        promotionalUpdates: response.promotionalUpdates,
      }));
    }
  } catch (error) {
    yield put(onOpenAlert(error.data.message));
  }

  callback();
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
    if (error.status === 404) {
      yield put(onOpenAlert('Please complete your profile!'));
    } else if (error.status === 401) {
      Router.push('/login');
    } else {
      yield put(onOpenAlert(error.data.message));
    }
  }
}

function* removeFavoritJob({ jobId, setState }) {
  try {
    yield call(axiosDelete, `/job/${jobId}/favorite`);

    setState(false);
  } catch (error) {
    if (error.status === 404) {
      yield put(onOpenAlert('Please complete your profile!'));
    } else {
      yield put(onOpenAlert(error.data.message));
    }
  }
}

function* updateUserProfile({ params }) {
  try {
    const response = yield call(axiosPut, '/talent', params);

    yield put(onUpdateTalent(response, { firstName: params.firstName, lastName: params.lastName }));
    yield put(onOpenAlert("We've successfully changed your profile"));
    Router.push('/gig-seeker/profile');
  } catch (error) {
    console.log(error)
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
