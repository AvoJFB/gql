import React from 'react';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';

const postStyle = {
  marginBottom: 10,
  padding: 20,
  height: 100,
  width: '100%',
  display: 'inline-block',
};

const Post = props => (
  <Paper style={postStyle} zDepth={1}>
    <Link
      to={`/${props.id}`}
      className="post-title"
    >
      {props.title}
    </Link>
    <p className="post-author">Author: {props.author}</p>
  </Paper>
);

export default Post;
