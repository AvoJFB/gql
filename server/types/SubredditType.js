const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList
} = require('graphql');
const PostType = require('./PostType');

module.exports = new GraphQLObjectType({
  name: 'Subreddit',
  fields: () => ({
    id: {type: GraphQLString},
    title: {type: GraphQLString},
    posts: {
      type: new GraphQLList(PostType)
    }
  })
});