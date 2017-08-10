const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLList
} = require('graphql');
const queries = require('./queries');
const axios = require('axios');

const mutation = require('./mutation');
const types = require('./types');

const RootQuery = new GraphQLObjectType({
	name: 'Root',
	fields: {
    user: queries.user,
		users: queries.users,
    subreddit: queries.subreddit,
		subreddits: queries.subreddits
	}
});


module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation
});
