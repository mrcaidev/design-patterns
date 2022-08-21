type House = string[];
type Builder = (house: House) => House;

const buildLivingRoom: Builder = (house) => {
  const nextHouse = [...house];
  nextHouse.push("living room");
  return nextHouse;
};

const buildBedroom: Builder = (house) => {
  const nextHouse = [...house];
  nextHouse.push("bedroom");
  return nextHouse;
};

const buildBathRoom: Builder = (house) => {
  const nextHouse = [...house];
  nextHouse.push("bathroom");
  return nextHouse;
};

const buildKitchen: Builder = (house) => {
  const nextHouse = [...house];
  nextHouse.push("kitchen");
  return nextHouse;
};

function compose(...builders: Builder[]) {
  return (target: House) =>
    builders.reduce((result, build) => build(result), target);
}

const build = compose(
  buildLivingRoom,
  buildBedroom,
  buildBedroom,
  buildKitchen,
  buildBathRoom
);
const house = build([]);
console.log(house);

export {};
