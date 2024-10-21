import { call, put, takeEvery } from 'redux-saga/effects';

import { getUserById} from '../api/apiService';

function* getUserByIdSaga(action) {
  try {
    const user = yield call(getUserById, action.payload);
    yield put({ type: 'FETCH_USER_SUCCESS', payload: user });
  } catch (error) {
    yield put({ type: 'FETCH_USER_FAILURE', error });
  }
}

function* getUserByIdFetch() {
  yield takeEvery('FETCH_USER_REQUEST', getUserByIdSaga);
}

export default getUserByIdFetch;