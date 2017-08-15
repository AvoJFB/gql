import { connect } from 'react-redux';
import SubredditList from '../components/SubredditList';

const mapStateToProps = state => ({
  subreddits: state.subreddits,
});

const SubredditListContainer = connect(mapStateToProps)(SubredditList);

export default SubredditListContainer;
