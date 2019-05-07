import {
  ADD_NEW_POST,
  DELETE_POST,
  RECEIVE_ALL_POSTS,
  RECEIVE_ALL_CATEGORIES,
  REQUEST_POSTS,
  ADD_NEW_POST_STARTER,
  DELETE_POST_STARTER,
  EDIT_POST_STARTER,
  EDIT_POST,
  UPDATE_POST_VOTE
} from './types';

const uuidv4 = require('uuid/v4');

const headers = {
  'Content-Type': 'application/json',
  Authorization: process.env.REACT_APP_AUTHORIZATION
};

// Async dispatchers

/**
 * A method to remove redundancy in methods created for fetching posts or categories
 * @param {string} type whether to dispatch the receiver for posts or categories
 * @param {object} data object to pass to the action for dispatch
 * @param {function} dispatch dispatch
 */

const getDispatcher = (type, data, dispatch) => {
  switch (type) {
    case 'posts':
      console.log(data);
      dispatch(receiveAllPosts(data));
      break;
    case 'categories':
      dispatch(receiveAllCategories(data));
      break;
    default:
      break;
  }
};

/**
 * Middleware to add new post to server.
 * Most of the posting work is done here.
 * @param {object} postData data to post/add to posts on server
 */

export const addNewPost = postData => async dispatch => {
  dispatch(addPostStarter());

  const fetchBody = {
    id: uuidv4(),
    timestamp: Date.now(),
    ...postData
  };

  const response = await fetch('/posts', {
    method: 'POST',
    body: JSON.stringify(fetchBody),
    headers
  });

  const data = await response.json();
  dispatch(addPost(data));
};

export const deletePost = id => async dispatch => {
  dispatch(deletePostStarter());

  const response = await fetch(`/posts/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ id }),
    headers
  });

  const data = await response.json();
  console.log(data);
  dispatch(deletePostSuccess(id));
};

export const editPost = (id, post) => async dispatch => {
  dispatch(editPostStarter(id));

  const response = await fetch(`/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers
  });

  const data = await response.json();
  console.log(data);
  dispatch(editPostSuccess());
};

export const fetchAll = type => async dispatch => {
  const response = await fetch(`/${type}`, { headers });
  const data = await response.json();
  console.log(data);
  getDispatcher(type, data, dispatch);
};

export const handleVote = (
  voteType,
  originType,
  originId
) => async dispatch => {
  const response = await fetch(`/${originType}/${originId}`, {
    method: 'POST',
    body: JSON.stringify({ option: voteType }),
    headers
  });
  const data = await response.json();
  dispatch(updatePostVote(data));
};

// Normal action creators

export const addPost = post => ({
  type: ADD_NEW_POST,
  post
});

export const addPostStarter = () => ({
  type: ADD_NEW_POST_STARTER
});

export const deletePostSuccess = id => ({
  type: DELETE_POST,
  id
});

export const deletePostStarter = () => ({
  type: DELETE_POST_STARTER
});

export const editPostStarter = id => ({
  type: EDIT_POST_STARTER,
  id
});

export const editPostSuccess = () => ({
  type: EDIT_POST
});

export const receiveAllCategories = categories => ({
  type: RECEIVE_ALL_CATEGORIES,
  categories
});

export const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const requestPosts = () => ({
  type: REQUEST_POSTS
});

export const updatePostVote = post => ({
  type: UPDATE_POST_VOTE,
  post
});
