interface Handler {
  setNext: (handler: Handler) => void;
  handle: (request: string) => string;
}

abstract class AbstractHandler implements Handler {
  protected nextHandler: Handler | null;

  constructor() {
    this.nextHandler = null;
  }

  setNext(handler: Handler) {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: string) {
    if (!this.nextHandler) return request;
    return this.nextHandler.handle(request);
  }
}

class Authenticator extends AbstractHandler {
  override handle(request: string) {
    const PASS = true;
    if (!PASS) return request + " -> authentication fail";

    const result = request + " -> authentication pass";
    return super.handle(result);
  }
}

class Validator extends AbstractHandler {
  override handle(request: string) {
    const PASS = true;
    if (!PASS) return request + " -> validation fail";

    const result = request + " -> validation pass";
    return super.handle(result);
  }
}

const handler = new Authenticator();
handler.setNext(new Validator());
const result = handler.handle("request");
console.log(result);

export {};
