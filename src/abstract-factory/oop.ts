interface Chair {
  sit: () => void;
}

class WoodenChair implements Chair {
  sit() {
    console.log("I sit on a wooden chair.");
  }
}

class StoneChair implements Chair {
  sit() {
    console.log("I sit on a stone chair.");
  }
}

interface Table {
  eat: () => void;
}

class WoodenTable implements Table {
  eat() {
    console.log("I eat on a wooden table.");
  }
}

class StoneTable implements Table {
  eat() {
    console.log("I eat on a stone table.");
  }
}

interface Factory {
  createChair: () => Chair;
  createTable: () => Table;
}

class WoodenFactory implements Factory {
  createChair() {
    return new WoodenChair();
  }
  createTable() {
    return new WoodenTable();
  }
}

class StoneFactory implements Factory {
  createChair() {
    return new StoneChair();
  }
  createTable() {
    return new StoneTable();
  }
}

function live(factory: Factory) {
  const chair = factory.createChair();
  const table = factory.createTable();

  console.log("I dust the chair.");
  chair.sit();
  console.log("I adjust my posture.");

  console.log("I come to the table.");
  table.eat();
  console.log("I clean the dishes.");
}

live(new WoodenFactory());
live(new StoneFactory());

export {};
