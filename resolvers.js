const resolvers = {
	Query: {
		get: (parent, { key }, { client }) => {
			try {
				return client.getAsync(key);
			} catch (error) {
				console.error(`Error: ${error}`);
				return null;
			}
		}
	},

	Mutation: {
		set: async (parent, { key, value }, { client }) => {
			try {
				await client.set(key, value); 
				return true;
			} catch (error) {
				console.error(`Error: ${error}`);
				return false;
			}
		}
	}
};

export default resolvers;
