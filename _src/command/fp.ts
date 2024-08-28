const runHelloCommand = () => {
  console.log("Hello");
};

const runFetchCommand = (url: string) => {
  console.log("Fetching", url);
};

runHelloCommand();
runFetchCommand("https://example.com");

export {};
