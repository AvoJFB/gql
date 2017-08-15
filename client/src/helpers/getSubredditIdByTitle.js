import find from 'lodash/find';

const getSubredditIdByTitle = (subreddits, title) => (
  find(subreddits, subreddit => subreddit.title === decodeURI(title)).id
);

export default getSubredditIdByTitle;
