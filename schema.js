import { ApolloServer } from 'apollo-server-express';
import redis from 'redis';
import bluebird from 'bluebird';

import typeDefs from './types';
import resolvers from './resolvers';

const client = redis.createClient();
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
client.on('error', (err) => console.log(`Error: ${err}`));

const schema = new ApolloServer({
	typeDefs,
	resolvers,
	playground: {
		endpoint: '/graphql',
		settings: {
			'editor.theme': 'light'
		}
	},
	context: {
		client
	}
});

export default schema;
