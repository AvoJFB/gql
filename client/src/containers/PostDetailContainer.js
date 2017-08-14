import { connect } from 'react-redux';
import find from 'lodash/find';
import PostDetail from '../components/PostDetail';

const mapStateToProps = (state, ownProps) => ({
  ...find(state.posts, post => post.id === Number(ownProps.match.params.id)),
});

export default connect(mapStateToProps)(PostDetail);
