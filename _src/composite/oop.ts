interface Component {
  getWeight: () => number;
}

class Good implements Component {
  protected weight: number;

  constructor(weight = 1) {
    this.weight = weight;
  }

  getWeight() {
    return this.weight;
  }
}

class Container implements Component {
  private children: Component[];

  constructor(children: Component[]) {
    this.children = children;
  }

  getWeight() {
    const PACKAGE_WEIGHT = 1;
    return this.children.reduce(
      (total, child) => total + child.getWeight(),
      PACKAGE_WEIGHT
    );
  }
}

const container = new Container([
  new Container([new Good(1), new Good(2)]),
  new Good(3),
]);
console.log(container.getWeight());

export {};
