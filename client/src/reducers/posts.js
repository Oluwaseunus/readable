import { RECEIVE_ALL_POSTS, ADD_NEW_POST } from '../actions/types';

const posts = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      console.log(action.posts);
      return [...action.posts];

    case ADD_NEW_POST:
      console.log('adding new post', action.posts);
      return state;

    default:
      return state;
  }
};

export default posts;
