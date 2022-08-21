interface Transportation {
  carry: (parcel: string) => void;
}

abstract class Logistics {
  // 不关心具体实现细节。
  abstract createTransportation(): Transportation;

  // 只关心宏观业务逻辑。
  deliver(parcel: string) {
    const transportation = this.createTransportation();
    console.log("发货");
    transportation.carry(parcel); // 不管是什么交通工具，能 `carry` 就行。
    console.log("收货");
  }
}

class Ship implements Transportation {
  carry(parcel: string) {
    console.log("航运", parcel);
  }
}

class SeaLogistics extends Logistics {
  // 用具体的“船”顶掉抽象的“交通工具”。
  createTransportation() {
    return new Ship();
  }
}

class Plane implements Transportation {
  carry(parcel: string) {
    console.log("空运", parcel);
  }
}

class AirLogistics extends Logistics {
  // 用具体的“飞机”顶掉抽象的“交通工具”。
  createTransportation() {
    return new Plane();
  }
}

const airLogistics = new AirLogistics();
airLogistics.deliver("海鲜");
const seaLogistics = new SeaLogistics();
seaLogistics.deliver("手机");

export {};
