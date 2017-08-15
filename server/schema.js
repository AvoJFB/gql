const {
  GraphQLObjectType,
  GraphQLSchema,
} = require('graphql');
const queries = require('./queries');
const mutation = require('./mutation');

const RootQuery = new GraphQLObjectType({
  name: 'Root',
  fields: {
    user: queries.user,
    users: queries.users,
    subreddit: queries.subreddit,
    subreddits: queries.subreddits,
  },
});


module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
