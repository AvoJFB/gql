const {
  GraphQLString,
  GraphQLObjectType
} = require('graphql');
const UserType = require('./UserType');

module.exports = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: {type: GraphQLString},
    title: {type: GraphQLString},
    description: {type: GraphQLString},
    author: {
      type: UserType,
      resolve: user => axios.get(`http://localhost:3000/users/${user.authorId}`).then(res => res.data)
    }
  })
});