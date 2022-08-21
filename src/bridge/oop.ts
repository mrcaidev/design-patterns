interface Database {
  query: () => void;
}

class PostgreSQL implements Database {
  query() {
    console.log("Query with PostgreSQL.");
  }
}

class MongoDB implements Database {
  query() {
    console.log("Query with MongoDB.");
  }
}

interface Backend {
  handle: () => void;
}

class Express implements Backend {
  protected database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  handle() {
    console.log("Handle with Express.");
    this.database.query();
  }
}

class NestJS implements Backend {
  protected database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  handle() {
    console.log("Handle with NestJS.");
    this.database.query();
  }
}

const app1 = new Express(new PostgreSQL());
app1.handle();

const app2 = new NestJS(new MongoDB());
app2.handle();

export {};
