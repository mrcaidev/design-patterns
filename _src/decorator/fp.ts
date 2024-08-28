type Handler = (request: string) => string;

const handleRequest: Handler = (request) => {
  return " -> Handle request: " + request;
};

const authenticate: Handler = (request) => {
  return " -> authentication pass" + request + " -> jwt token given";
};

function compose(...handlers: Handler[]) {
  const handler: Handler = (request) =>
    handlers.reduce((result, link) => link(result), request);
  return handler;
}

const handler = compose(handleRequest, authenticate);
const result = handler?.("request");
console.log(result);

export {};
