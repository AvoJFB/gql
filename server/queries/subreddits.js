const { GraphQLList } = require('graphql');
const axios = require('axios');
const SubredditType = require('../types').SubredditType;

module.exports = {
  type: new GraphQLList(SubredditType),
  resolve(root, args) {
    return axios.get('http://localhost:3000/subreddits')
      .then(res => res.data)
  }
};
