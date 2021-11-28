import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NftDocument = Nft & Document;

@Schema()
export class Nft {
  @Prop()
  name: string;

  @Prop()
  priceSOL: number;

  @Prop()
  hashcode: string;
}

export const NftSchema = SchemaFactory.createForClass(Nft);