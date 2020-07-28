import { delete as axiosDelete, get, put as axiosPut } from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { onOpenAlert } from 'redux/alert';

const ON_GET_PAYMENT_METHOD = 'ON_GET_PAYMENT_METHOD';
const ON_REMOVE_PAYMENT_OPTION = 'ON_REMOVE_PAYMENT_OPTION';
const ON_SET_DEFAULT_PAYMENT_OPTION = 'ON_SET_DEFAULT_PAYMENT_OPTION';
const ON_CHECK_PROMOTION_CODE = 'ON_CHECK_PROMOTION_CODE';

function* getPaymentMethod({ setState }) {
  try {
    const response = yield call(get, '/payment/methods');

    setState(response);
  } catch (error) {
    console.error(error);
  }
}

function* checkPromotionCode({ code, callback }) {
  try {
    const response = yield call(get, `/promotion/check-code?code=${code}`);

    callback(200, response);
  } catch (error) {
    callback(400);
    console.error(error);
  }
}

function* removePaymentOption({ id, callback }) {
  try {
    yield call(axiosDelete, `/payment/methods/${id}`);

    callback();
  } catch (error) {
    yield put(onOpenAlert(error.data.message));
  }
}

function* setDefaultPaymentOption({ id }) {
  try {
    yield call(axiosPut, `/payment/methods/${id}/default`);

    yield put(onOpenAlert('Payment option has succesfully changed'));
  } catch (error) {
    yield put(onOpenAlert(error.data.message));
  }
}

export const onGetPaymentMethod = (setState) => ({
  type: ON_GET_PAYMENT_METHOD, setState,
});

export const onRemovePaymentOption = (id, callback) => ({
  type: ON_REMOVE_PAYMENT_OPTION, id, callback,
});

export const onSetDefaultPaymentOption = (id) => ({
  type: ON_SET_DEFAULT_PAYMENT_OPTION, id,
});

export const onCheckPromotionCode = (code, callback) => ({
  type: ON_CHECK_PROMOTION_CODE, code, callback,
});

export default function* paymentWatcher() {
  yield takeLatest(ON_GET_PAYMENT_METHOD, getPaymentMethod);
  yield takeLatest(ON_REMOVE_PAYMENT_OPTION, removePaymentOption);
  yield takeLatest(ON_SET_DEFAULT_PAYMENT_OPTION, setDefaultPaymentOption);
  yield takeLatest(ON_CHECK_PROMOTION_CODE, checkPromotionCode);
}
