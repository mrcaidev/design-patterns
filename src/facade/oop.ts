class HeadingParser {
  parse(content: string) {
    console.log("Parse:", content);
  }
}

class AnchorParser {
  parse(content: string) {
    console.log("Parse:", content);
  }
}

class ImageParser {
  parse(content: string) {
    console.log("Parse:", content);
  }
}

class MarkdownParser {
  private headingParser = new HeadingParser();
  private anchorParser = new AnchorParser();
  private imageParser = new ImageParser();

  parse(content: string) {
    this.headingParser.parse(content);
    this.anchorParser.parse(content);
    this.imageParser.parse(content);
  }
}

const parser = new MarkdownParser();
parser.parse("# Hello");

export {};
