interface Prototype {
  clone: () => Prototype;
}

class House implements Prototype {
  protected address: { city: string; street: string };
  protected rooms: string[];

  constructor() {
    this.address = { city: "Shanghai", street: "Rd.Hanzhong" };
    this.rooms = ["living room", "bedroom", "bedroom", "kitchen", "bathroom"];
  }

  printInfo() {
    console.log("Address:", this.address);
    console.log("Rooms:", this.rooms);
  }

  clone() {
    const instance: House = Object.create(this);
    instance.address = { ...this.address };
    instance.rooms = [...this.rooms];
    return instance;
  }
}

const house = new House();
const clone = house.clone();
clone.printInfo();

export {};
