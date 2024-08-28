interface API {
  handleRequest: (request: string) => string;
}

class UserAPI implements API {
  handleRequest(request: string) {
    return "Handle request: " + request;
  }
}

class UserAPIProxy implements API {
  protected api: API;

  constructor() {
    this.api = new UserAPI();
  }

  handleRequest(request: string) {
    console.log("Authentication pass.");
    return this.api.handleRequest(request);
  }
}

const api = new UserAPIProxy();
api.handleRequest("request");

export {};
