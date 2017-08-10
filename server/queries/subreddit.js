const { GraphQLString } = require('graphql');
const axios = require('axios');
const SubredditType = require('../types').SubredditType;

module.exports = {
  type: SubredditType,
  args: {
    id: {type: GraphQLString}
  },
  resolve(root, args) {
    return axios.get(`http://localhost:3000/subreddits/${args.id}`)
      .then(res => res.data);
  }
};
