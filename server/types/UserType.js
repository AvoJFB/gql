const {
  GraphQLString,
  GraphQLObjectType
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    email: {type: GraphQLString}
  })
});
