const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
	GraphQLList,
	GraphQLNonNull
} = require('graphql');
const axios = require('axios');
const mutation = require('./mutation')
const { UserType, PostType, SubredditType } = require('./types');

const RootQuery = new GraphQLObjectType({
	name: 'Root',
	fields: {
		users: {
			type: new GraphQLList(UserType),
			resolve(root, args) {
				return axios.get('http://localhost:3000/users')
					.then(res => res.data)
			}
		},
		user: {
			type: UserType,
			args: {
				id: {type: GraphQLString}
			},
			resolve(root, args) {
				return axios.get(`http://localhost:3000/users/${args.id}`)
					.then(res => res.data);
			}
		},
		subreddits: {
			type: new GraphQLList(SubredditType),
			resolve(root, value) {
				return axios.get('http://localhost:3000/subreddits')
					.then(res => res.data)
			}
		},
		subreddit: {
			type: SubredditType,
			args: {
				id: {type: GraphQLString}
			},
			resolve(root, args) {
				return axios.get(`http://localhost:3000/subreddits/${args.id}`)
					.then(res => res.data);
			}
		},
	}
})


const schema = new GraphQLSchema({
	query: RootQuery,
	mutation
});

module.exports = schema;