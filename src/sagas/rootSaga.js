import { all } from 'redux-saga/effects';
import getUser from './getListUserSagas';
import getUserByIdFetch from './getUserByIdSaga';

export default function* rootSaga() {
  yield all([
    getUser(),
    getUserByIdFetch()
  ]);
}