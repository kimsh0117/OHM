import { all, fork, take, call, put } from "redux-saga/effects";
import * as api from "api";
import { getEvents } from "actions";
import { GET_EVENTS } from "actions/types";

export function* fetchEvents(url) {
  try {
    const products = yield call(api.getEvents, url);
    yield put(getEvents.success(products));
  } catch (error) {
    yield put(getEvents.failure(error));
  }
}

export function* watchFetchEvents() {
  while(true) {
    const {url} = yield take(GET_EVENTS["REQUEST"])
    yield fork(fetchEvents, url)
  }
}

export default function*() {
  yield all([fork(watchFetchEvents)])
}