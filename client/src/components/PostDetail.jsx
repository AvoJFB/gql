import React from 'react';

const PostDetail = props => (
  <div className="container">
    <h1>{props.title}</h1>
    <h2>{props.author}</h2>
    <h3>Post Number {props.id}</h3>
  </div>
);

export default PostDetail;
