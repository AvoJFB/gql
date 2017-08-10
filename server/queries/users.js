const { GraphQLList } = require('graphql');
const axios = require('axios');
const UserType = require('../types').UserType;

module.exports = {
  type: new GraphQLList(UserType),
  resolve(root, args) {
    return axios.get('http://localhost:3000/users')
      .then(res => res.data)
  }
};
