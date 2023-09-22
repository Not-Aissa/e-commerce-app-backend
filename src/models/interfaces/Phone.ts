interface Phone {
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  target: string;
  specifications: {
    storage: number;
    ram: number;
    battery: number;
    processor: string;
    cameras: {
      front: number;
      rear: number[];
    };
    screenType: string;
    screenSize: number;
    system: string;
    systemVersion: number;
  };
}

export default Phone;
