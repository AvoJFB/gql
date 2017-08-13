import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostList from './PostList';
import PostDetail from './PostDetail';

const posts = [
  {
    id: 1,
    title: 'This post title was lost so I\'ve wrote some shit after that',
    author: 'avojfb',
  },
  {
    id: 2,
    title: 'Actually I don\'t know what\'s going on',
    author: 'tolyandrov98',
  },
  {
    id: 3,
    title: 'The best post in whole reddit',
    author: 'gamedev666',
  },
  {
    id: 4,
    title: 'This one is the latest',
    author: 'lastemperor',
  },
];

const PostListWrapper = () => (
  <PostList posts={posts} />
);

const Content = () => (
  <div>
    <Switch>
      <Route exact path="/" component={PostListWrapper} />
      <Route path="/:id" component={PostDetail} />
    </Switch>
  </div>
);

export default Content;
