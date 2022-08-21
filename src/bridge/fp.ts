type Query = () => void;
type Handler = (query: Query) => void;

const queryWithPostgreSQL: Query = () => {
  console.log("Query with PostgreSQL.");
};

const queryWithMongoDB: Query = () => {
  console.log("Query with MongoDB.");
};

const handleWithExpress: Handler = (query) => {
  console.log("Handle with Express.");
  query();
};

const handleWithNestJS: Handler = (query) => {
  console.log("Handle with NestJS.");
  query();
};

handleWithExpress(queryWithPostgreSQL);
handleWithNestJS(queryWithMongoDB);

export {};
