import { all } from "redux-saga/effects";
import { getDataSaga } from "./App/state/saga";

export default function* rootSaga() {
    yield all([
        getDataSaga()
    ]);
}