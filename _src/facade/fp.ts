function parseHeading(content: string) {
  console.log("Parse:", content);
}

function parseAnchor(content: string) {
  console.log("Parse:", content);
}

function parseImage(content: string) {
  console.log("Parse:", content);
}

function parseMarkdown(content: string) {
  parseHeading(content);
  parseAnchor(content);
  parseImage(content);
}

parseMarkdown("# Hello");

export {};
