const { GraphQLString } = require('graphql');
const axios = require('axios');
const UserType = require('../types').UserType;

module.exports = {
  type: UserType,
  args: {
    id: {type: GraphQLString}
  },
  resolve(root, args) {
    return axios.get(`http://localhost:3000/users/${args.id}`)
      .then(res => res.data);
  }
};
