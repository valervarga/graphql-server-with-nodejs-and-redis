import express from 'express';
import schema from './schema';

const PORT = process.env.PORT || 4000;
const app = express();

schema.applyMiddleware({ app });

app.listen(PORT, () => console.log(`GraphQL server started on port: ${PORT}.`));

export default app;
