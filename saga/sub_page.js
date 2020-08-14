import axios from 'axios';
import { takeLatest, call } from 'redux-saga/effects';

const ON_GET_SUB_PAGE_CONTENT = 'ON_GET_SUB_PAGE_CONTENT';

const request = (page) => axios({
  method: 'GET',
  url: `/api/v1/sub_pages?page=${page}`,
  baseURL: process.env.CMS_URL,
});

function* subPage({ page, setState }) {
  try {
    const response = yield call(request, page);
    setState({ loading: false, data: response.data });
  } catch (error) {
    console.error(error);
  }
}

export const onGetSubpageContent = (page, setState) => ({
  type: ON_GET_SUB_PAGE_CONTENT, page, setState,
});

export default function* subPageWatcher() {
  yield takeLatest(ON_GET_SUB_PAGE_CONTENT, subPage);
}
