import { ADD_COMMENT, RECEIVE_COMMENTS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        [action.data.parentId]: [...state[action.data.parentId], action.data]
      };

    case RECEIVE_COMMENTS:
      return {
        ...state,
        [action.id]: action.data
      };

    default:
      return state;
  }
};
