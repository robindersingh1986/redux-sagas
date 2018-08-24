import { takeLatest, call, put } from "redux-saga/effects";
//import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga(action) {
  yield takeLatest("FETCH_POSTS", workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchData() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    return fetch(url)
    .then(res => res.json())
    .then(posts => posts);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {  
    const result = yield call(fetchData);
    const payload = result; //JSON.stringify(result);

    // dispatch a success action to the store with the new result
    yield put({ type: "FETCH_POSTS_SUCCESS", payload });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "FETCH_POSTS_FAILURE", error });
  }
}