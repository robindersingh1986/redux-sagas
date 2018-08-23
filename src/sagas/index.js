import { takeLatest, call, put } from "redux-saga/effects";
//import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("FETCH_POSTS", workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchData() {

    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => posts);

  // return axios({
  //   method: "get",
  //   url: "https://jsonplaceholder.typicode.com/posts"
  // });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const result = yield call(fetchData);
   
    // dispatch a success action to the store with the new result
    yield put({ type: "FETCH_POSTS_SUCCESS", result });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "FETCH_POSTS_FAILURE", error });
  }
}