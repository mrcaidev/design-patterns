class Database {
  private static instance: Database;
  name: string;

  private constructor() {
    this.name = "postgres";
  }

  static getInstance() {
    if (!this.instance) this.instance = new Database();
    return this.instance;
  }
}

const h1 = Database.getInstance();
const h2 = Database.getInstance();
console.log(h1 === h2);

export {};
