import uuid from 'js-uuid';
import types from '../actions/actionTypes';

const initialState = [
  {
    id: 1,
    title: 'This post title was lost so I\'ve wrote some shit after that',
    author: 'avojfb',
    subredditIds: [1, 2],
  },
  {
    id: 2,
    title: 'Actually I don\'t know what\'s going on',
    author: 'tolyandrov98',
    subredditIds: [1, 3],
  },
  {
    id: 3,
    title: 'The best post in whole reddit',
    author: 'gamedev666',
    subredditIds: [1],
  },
  {
    id: 4,
    title: 'This one is the latest',
    author: 'lastemperor',
    subredditIds: [2],
  },
];

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_POST:
      return [
        ...state,
        {
          id: uuid(),
          title: action.title,
          author: action.author,
        },
      ];
    default:
      return state;
  }
};

export default postsReducer;
