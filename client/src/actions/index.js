import {
  RECEIVE_ALL_POSTS,
  ADD_NEW_POST,
  RECEIVE_ALL_CATEGORIES
} from './types';

const uuidv4 = require('uuid/v4');

export const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const receiveAllCategories = posts => ({
  type: RECEIVE_ALL_CATEGORIES
});

export const addPost = posts => ({
  type: ADD_NEW_POST,
  posts
});

const headers = {
  Authorization: process.env.REACT_APP_AUTHORIZATION
};

export const fetchAllPosts = () => async dispatch => {
  const response = await fetch('/posts', { headers });
  const data = await response.json();
  dispatch(receiveAllPosts(data));
};

export const addNewPost = ({
  title,
  body,
  author,
  category
}) => async dispatch => {
  const fetchBody = {
    id: uuidv4(),
    timestamp: Date.now(),
    title,
    body,
    author,
    category
  };

  console.log(fetchBody);

  const response = await fetch('/posts', {
    method: 'POST',
    body: fetchBody,
    headers: {
      Authorization: process.env.REACT_APP_AUTHORIZATION
    }
  });
  const data = await response.json();
  console.log(data);
  dispatch(addPost(data));
};

const dispatcher = (type, data, dispatch) => {
  switch (type) {
    case 'posts':
      dispatch(receiveAllPosts(data));
      break;
    case 'categories':
      dispatch(receiveAllCategories(data));
      break;
    default:
      break;
  }
};

export const fetchAll = type => async dispatch => {
  const response = await fetch(`/${type}`, { headers });
  const data = await response.json();
  dispatcher(type, data, dispatch);
};
