type Sit = () => void;

const sitOnWoodenChair: Sit = () => {
  console.log("I sit on a wooden chair.");
};

const sitOnStoneChair: Sit = () => {
  console.log("I sit on a stone chair.");
};

function live(sit: Sit) {
  console.log("I dust the chair.");
  sit();
  console.log("I adjust my posture.");
}

live(sitOnWoodenChair);
live(sitOnStoneChair);

export {};
