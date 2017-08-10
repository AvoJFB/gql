const {
  GraphQLString,
  GraphQLNonNull
} = require('graphql');
const axios = require('axios');
const { UserType } = require('../types');

module.exports = {
  type: UserType,
  args: {
    id: {type: new GraphQLNonNull(GraphQLString)},
    name: {type: GraphQLString},
    email: {type: GraphQLString}
  },
  resolve(root, args) {
    return axios.put(`http://localhost:3000/users/${args.id}`, args)
      .then(res => res.data)
  }
};
