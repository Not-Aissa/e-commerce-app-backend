interface Processor {
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  target: string;
  specifications: {
    speed: number;
    cores: number;
    logicalProcessors: number;
  };
}

export default Processor;
