const {
  GraphQLString,
  GraphQLNonNull
} = require('graphql');
const axios = require('axios');
const { UserType } = require('../types');

module.exports = {
  type: UserType,
  args: {
    name: {type: new GraphQLNonNull(GraphQLString)},
    email: {type: new GraphQLNonNull(GraphQLString)}
  },
  resolve(root, args) {
    return axios.post('http://localhost:3000/users', {
      name: args.name,
      email: args.email
    })
      .then(res => res.data)
  }
};
