import { connect } from 'react-redux';
import PostList from '../components/PostList';

const mapStateToProps = state => ({
  posts: state.posts,
});

const PostListContainer = connect(mapStateToProps)(PostList);

export default PostListContainer;
