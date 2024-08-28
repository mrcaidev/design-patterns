interface Chair {
  sit: () => void;
}

abstract class House {
  abstract createChair(): Chair;

  live() {
    const chair = this.createChair();
    console.log("I dust the chair.");
    chair.sit();
    console.log("I adjust my posture.");
  }
}

class WoodenChair implements Chair {
  sit() {
    console.log("I sit on a wooden chair.");
  }
}

class WoodenHouse extends House {
  createChair() {
    return new WoodenChair();
  }
}

class StoneChair implements Chair {
  sit() {
    console.log("I sit on a stone chair.");
  }
}

class StoneHouse extends House {
  createChair() {
    return new StoneChair();
  }
}

const house1 = new WoodenHouse();
house1.live();

const house2 = new StoneHouse();
house2.live();

export {};
