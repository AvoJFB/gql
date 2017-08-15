import React from 'react';
import Subreddit from './Subreddit';

const SubredditList = props => (
  <div className="container subreddits-container">
    {props.subreddits.map(subreddit => (
      <Subreddit key={subreddit.id} id={subreddit.id} title={subreddit.title} />
    ))}
  </div>
);

export default SubredditList;
