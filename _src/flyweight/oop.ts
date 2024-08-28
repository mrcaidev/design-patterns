interface Address {
  country: string;
  province: string;
  city: string;
  street: string;
  number: number;
}

class Family {
  address: Address;

  constructor(address: Address) {
    this.address = address;
  }
}

class FamilyFactory {
  private families: Record<string, Family>;

  constructor() {
    this.families = {};
  }

  private getCacheKey(address: Address) {
    return address.street + "-" + address.number;
  }

  getFamily(address: Address) {
    const key = this.getCacheKey(address);
    if (!this.families[key]) this.families[key] = new Family(address);
    return this.families[key] as Family;
  }
}

class Member {
  private family: Family;
  private name: string;

  constructor(family: Family, name: string) {
    this.family = family;
    this.name = name;
  }

  getInfo() {
    return JSON.stringify({ ...this.family.address, name: this.name });
  }
}

const familyFactory = new FamilyFactory();
const family = familyFactory.getFamily({
  country: "China",
  province: "Sichuan",
  city: "Chengdu",
  street: "Rd.Jiefang",
  number: 206,
});
const father = new Member(family, "William");
const mother = new Member(family, "Jessica");
const son = new Member(family, "Bob");
console.log(father.getInfo());
console.log(mother.getInfo());
console.log(son.getInfo());

export {};
