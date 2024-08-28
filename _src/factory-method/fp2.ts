function carryByShip(parcel: string) {
  console.log("航运", parcel);
}

function carryByPlane(parcel: string) {
  console.log("空运", parcel);
}

function deliver(carry: (parcel: string) => void, parcel: string) {
  console.log("发货");
  carry(parcel);
  console.log("收货");
}

deliver(carryByShip, "电脑");
deliver(carryByPlane, "电脑");

export {};
