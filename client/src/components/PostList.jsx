import React from 'react';
import Post from './Post';

const PostList = props => (
  <div className="container posts-container">
    {props.posts && props.posts.length > 0 ? props.posts.map(post => (
      <Post
        subreddit={props.match.params.subreddit}
        key={post.id}
        id={post.id}
        title={post.title}
        author={post.author}
      />
    )) : <h2>No Posts for this subreddit.</h2>
    }
  </div>
);

export default PostList;
