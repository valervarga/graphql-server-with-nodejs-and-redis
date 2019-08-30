import { ApolloServer } from 'apollo-server-express';

import typeDefs from './types';
import resolvers from './resolvers';

const schema = new ApolloServer({
	typeDefs,
	resolvers,
	playground: {
		endpoint: '/graphql',
		settings: {
			'editor.theme': 'light'
		}
	}
});

export default schema;
