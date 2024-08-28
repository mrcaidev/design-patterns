type Sit = () => void;

const sitOnWoodenChair: Sit = () => {
  console.log("I sit on a wooden chair.");
};

const sitOnStoneChair: Sit = () => {
  console.log("I sit on a stone chair.");
};

type Eat = () => void;

const eatOnWoodenTable: Eat = () => {
  console.log("I eat on a wooden table.");
};

const eatOnStoneTable: Eat = () => {
  console.log("I eat on a stone table.");
};

type Factory = () => { sit: Sit; eat: Eat };

const woodenFactory: Factory = () => ({
  sit: sitOnWoodenChair,
  eat: eatOnWoodenTable,
});

const stoneFactory: Factory = () => ({
  sit: sitOnStoneChair,
  eat: eatOnStoneTable,
});

function live(factory: Factory) {
  const { sit, eat } = factory();

  console.log("I dust the chair.");
  sit();
  console.log("I adjust my posture.");

  console.log("I come to the table.");
  eat();
  console.log("I clean the dishes.");
}

live(woodenFactory);
live(stoneFactory);

export {};
