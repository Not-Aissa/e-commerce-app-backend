interface GraphicsCard {
  name: string;
  brand: string;
  subBrand: string;
  price: number;
  imageUrl: string;
  target: string;
  specifications: {
    vram: string;
    ports: string[];
  };
}

export default GraphicsCard;
