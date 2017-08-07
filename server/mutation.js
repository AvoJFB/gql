const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLNonNull
} = require('graphql');
const { UserType } = require('./types');

const mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addUser: {
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
		},
		updateUser: {
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
		},
		deleteUser: {
			type: UserType,
			args: {
				id: {type: new GraphQLNonNull(GraphQLString)}
			},
			resolve(root, args) {
				return axios.delete(`http://localhost:3000/users/${args.id}`)
					.then(res => res.data)
			}
		}
	}
})

module.exports = mutation;
