const express = require('express');
const expressGQL = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use('/graphql', expressGQL({
	schema,
	graphiql: true
}))

app.listen(4000, () => {
	console.log('Listening on port 4000.');
});
