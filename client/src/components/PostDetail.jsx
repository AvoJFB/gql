import React from 'react';

const PostDetail = ({ match }) => (
  <div className="container">
    <h1>Post Number {match.params.id}</h1>
  </div>
);

export default PostDetail;
