import { call, put, takeEvery } from 'redux-saga/effects';
import { getUsers } from '../api/apiService';


function* userSaga() {
  try {
    const data = yield call(getUsers);
    yield put({ type: 'FETCH_DATA_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'FETCH_DATA_FAILURE', error });
  }
}

function* getUser() {
  yield takeEvery('FETCH_DATA_REQUEST', userSaga);
}

export default getUser;