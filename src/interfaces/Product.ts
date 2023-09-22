import { Types } from "mongoose";

interface Product {
  _id: Types.ObjectId;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  target: string;
}

export default Product;
