import { takeLatest, put, call } from 'redux-saga/effects';
import { GET_DATA } from '../constants/tableConstants';
import { getDataSuccess, getDataFailure } from './actions';
import { getDataApi } from "../api/tableApi";

export function* getDataSaga() {
    yield takeLatest(GET_DATA, getData);
}

function* getData() {
    try {
        const data = yield call(getDataApi);
        yield put(getDataSuccess(data));
    } catch(err) {
        console.warn('Data is not loaded...', err);
        yield put(getDataFailure());
    }
}