const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList
} = require('graphql');
const axios = require('axios');

const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: {type: GraphQLString},
		name: {type: GraphQLString},
		email: {type: GraphQLString}
	})
});

const PostType = new GraphQLObjectType({
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

const SubredditType = new GraphQLObjectType({
	name: 'Subreddit',
	fields: () => ({
		id: {type: GraphQLString},
		title: {type: GraphQLString},
		posts: {
			type: new GraphQLList(PostType)
		}
	})
});

module.exports.UserType = UserType;
module.exports.PostType = PostType;
module.exports.SubredditType = SubredditType;