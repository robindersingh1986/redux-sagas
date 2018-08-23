import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  status: null,
  item: {}
};

export default function (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        status:null,
        items: action.result
      };
      case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        status:"call made successfully",
        items: action.result
      };
      case FETCH_POSTS_FAILURE:
      return {
        ...state,
        status:" call failed",
        items: action.result
      };
    case NEW_POST:
      return {
        ...state,
        item: action.result
      };
    default:
      return state;
  }
}
