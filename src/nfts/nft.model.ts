import * as mongoose from 'mongoose';

export const NFTSchema = new mongoose.Schema({
  collection: {type: String, required: false},
  name: {type: String, required: false},
  priceSOL: {type: Number, required: false},
  hashcode: {type: String, required: false},
});

export class NFT {
  constructor(
    public id: string,
    public collection: string,
    public name: string,
    public priceSOL: number,
    public hashcode: string,
  ) {}
}
