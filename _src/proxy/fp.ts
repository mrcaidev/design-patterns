type Handler = (request: string) => string;

const handleUserRequest: Handler = (request) => {
  return "Handle request: " + request;
};

const handleUserRequestProxy: Handler = (request) => {
  console.log("Authentication check.");
  return handleUserRequest(request);
};

console.log(handleUserRequestProxy("request"));

export {};
