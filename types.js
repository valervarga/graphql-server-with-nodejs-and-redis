import { gql } from 'apollo-server-express';

const typeDefs = gql`
	type Query {
		get(key: String!): String
	}

	type Mutation {
		set(key: String!, value: String!): Boolean!
	}
`;

export default typeDefs;
