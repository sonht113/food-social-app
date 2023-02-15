import { Schema, Document } from 'mongoose';

const FoodSchema = new Schema (
  {
    name: String,
    description: String,
    price: Number || String,
  },
  {
    timestamps: true,
    collection: 'foods',
  }, 
)

export { FoodSchema }

export interface Food extends Document {
  name: string;
  description: string;
  price: number | string;
}
