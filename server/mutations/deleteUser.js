const {
  GraphQLString,
  GraphQLNonNull
} = require('graphql');
const axios = require('axios');
const { UserType } = require('../types');

module.exports = {
  type: UserType,
  args: {
    id: {type: new GraphQLNonNull(GraphQLString)}
  },
  resolve(root, args) {
    return axios.delete(`http://localhost:3000/users/${args.id}`)
      .then(res => res.data)
  }
};
