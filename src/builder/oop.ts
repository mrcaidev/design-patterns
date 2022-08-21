class House {
  rooms: string[];

  constructor() {
    this.rooms = [];
  }
}

class HouseBuilder {
  protected house: House;

  constructor() {
    this.house = new House();
  }

  buildLivingRoom() {
    this.house.rooms.push("living room");
    return this;
  }

  buildBedroom() {
    this.house.rooms.push("bedroom");
    return this;
  }

  buildBathRoom() {
    this.house.rooms.push("bathroom");
    return this;
  }

  buildKitchen() {
    this.house.rooms.push("kitchen");
    return this;
  }

  reset() {
    this.house = new House();
    return this;
  }

  getHouse() {
    const house = this.house;
    this.reset();
    return house;
  }
}

const builder = new HouseBuilder();
const house = builder
  .buildLivingRoom()
  .buildBedroom()
  .buildBedroom()
  .buildKitchen()
  .buildBathRoom()
  .getHouse();
console.log(house.rooms);

export {};
