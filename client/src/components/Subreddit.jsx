import React from 'react';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';

const subredditStyle = {
  margin: 10,
  padding: 80,
};

const Subreddit = props => (
  <Paper style={subredditStyle} zDepth={1}>
    <Link
      to={`/r/${encodeURI(props.title)}`}
      className="subreddit-title"
    >
      {props.title}
    </Link>
  </Paper>
);

export default Subreddit;
