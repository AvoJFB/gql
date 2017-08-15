import uuid from 'js-uuid';
import types from '../actions/actionTypes';

const initialState = [
  {
    id: 1,
    title: 'Technologies',
  },
  {
    id: 2,
    title: 'Movies',
  },
  {
    id: 3,
    title: 'Web Dev',
  },
  {
    id: 4,
    title: 'Javascript',
  },
  {
    id: 5,
    title: 'Videos',
  },
  {
    id: 6,
    title: 'Pictures',
  },
  {
    id: 7,
    title: 'Frontend',
  },
];

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_SUBREDDIT:
      return [
        ...state,
        {
          id: uuid(),
          title: action.title,
        },
      ];
    default:
      return state;
  }
};

export default postsReducer;
