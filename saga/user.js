import { put as axiosPut } from 'axios';
import Cookie from 'js-cookie';
import { takeLatest, call, put } from 'redux-saga/effects';
import { onOpenAlert } from 'redux/alert';
import Router from 'next/router';

const ON_UPDATE_USER_TYPE = 'ON_UPDATE_USER_TYPE';

function* updateUserType({ userType }) {
  try {
    yield call(axiosPut, '/users/user-type', { userType });

    Cookie.set('__gigtype', userType);
    if (userType === 'TALENT') {
      Router.push('/gig-seeker/profile');
    } else if (userType === 'COMPANY') {
      Router.push('/company/profile');
    }
  } catch (error) {
    yield put(onOpenAlert(error.data.message));
  }
}

export const onUpdateUserType = (userType) => ({
  type: ON_UPDATE_USER_TYPE, userType,
});

export default function* userWatcher() {
  yield takeLatest(ON_UPDATE_USER_TYPE, updateUserType);
}
