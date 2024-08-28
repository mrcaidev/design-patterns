interface Command {
  run: () => void;
}

class HelloCommand implements Command {
  run() {
    console.log("Hello");
  }
}

class FetchCommand implements Command {
  protected url: string;

  constructor(url: string) {
    this.url = url;
  }

  run() {
    console.log("Fetching", this.url);
  }
}

const helloCommand = new HelloCommand();
const fetchCommand = new FetchCommand("https://example.com");
helloCommand.run();
fetchCommand.run();

export {};
