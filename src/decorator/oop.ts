interface API {
  handle: (request: string) => string;
}

class UserAPI implements API {
  handle(request: string) {
    return " -> Handle request: " + request;
  }
}

class Authenticator implements API {
  protected api: API;

  constructor(api: API) {
    this.api = api;
  }

  handle(request: string) {
    return (
      " -> authentication pass" +
      this.api.handle(request) +
      " -> jwt token given"
    );
  }
}

const api = new Authenticator(new UserAPI());
console.log(api.handle("request"));

export {};
