import { connect } from 'react-redux';
import PostList from '../components/PostList';
import getSubredditIdByTitle from '../helpers/getSubredditIdByTitle';

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts.filter(post => post.subredditIds.includes(
    getSubredditIdByTitle(state.subreddits, ownProps.match.params.subreddit),
  )),
});

const PostListContainer = connect(mapStateToProps)(PostList);

export default PostListContainer;
