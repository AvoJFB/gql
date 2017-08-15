import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SubredditListContainer from '../containers/SubredditListContainer';
import PostListContainer from '../containers/PostListContainer';
import PostDetailContainer from '../containers/PostDetailContainer';

const Content = () => (
  <div>
    <Switch>
      <Route exact path="/" component={SubredditListContainer} />
      <Route exact path="/r/:subreddit" component={PostListContainer} />
      <Route path="/:id" component={PostDetailContainer} />
    </Switch>
  </div>
);

export default Content;
