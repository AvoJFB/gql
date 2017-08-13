import React from 'react';
import Post from './Post';

const PostList = props => (
  <div className="container posts-container">
    {props.posts.map(post => (
      <Post key={post.id} id={post.id} title={post.title} author={post.author} />
    ))}
  </div>
);

export default PostList;
