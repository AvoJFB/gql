const {
  GraphQLObjectType,
} = require('graphql');
const mutations = require('./mutations');

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: mutations.addUser,
    updateUser: mutations.updateUser,
    deleteUser: mutations.deleteUser,
  },
});
