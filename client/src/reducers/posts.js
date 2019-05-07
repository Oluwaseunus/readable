import {
  RECEIVE_ALL_POSTS,
  ADD_NEW_POST,
  ADD_NEW_POST_STARTER,
  DELETE_POST,
  REQUEST_POSTS,
  EDIT_POST_STARTER,
  EDIT_POST,
  UPDATE_POST_VOTE
} from '../actions/types';

const defaultPostsState = {
  isFetching: false,
  items: {}
};

const posts = (state = defaultPostsState, action) => {
  switch (action.type) {
    case ADD_NEW_POST_STARTER:
      console.log('About to add a new post');
      return state;

    case ADD_NEW_POST:
      console.log('adding new post', action.post);
      return {
        ...state,
        isFetching: false,
        items: {
          ...state.items,
          [action.post.id]: action.post
        }
      };

    case DELETE_POST:
      console.log('deleting post', action.id);

      return {
        ...state,
        items: {
          ...state.items,
          [action.id]: {
            ...state.items[action.id],
            deleted: true
          }
        }
      };

    case EDIT_POST_STARTER:
      console.log('editing post', action.id);
      return state;

    case EDIT_POST:
      console.log('edit post', action.id);
      return state;

    case RECEIVE_ALL_POSTS:
      console.log(action.posts);

      return {
        isFetching: false,
        items: { ...action.posts }
      };

    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      };

    case UPDATE_POST_VOTE:
      const { id } = action.post;
      return {
        ...state,
        items: {
          ...state.items,
          [id]: action.post
        }
      };

    default:
      return state;
  }
};

export default posts;
