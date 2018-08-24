import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  status: null,
  item: {}
};

export default function (state = initialState, action) {
  console.log("action", action);
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        status:null,
        items: action.payload
      };
      case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        status:200,
        items: action.payload
      };
      case FETCH_POSTS_FAILURE:
      return {
        ...state,
        status:404,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
