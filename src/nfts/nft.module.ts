import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { NFTController } from './nft.controller';
import { NFTService } from './nft.service';
import { NFTSchema } from './nft.model';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: 'Nft', schema: NFTSchema }]),
    ],
  controllers: [NFTController],
  providers: [NFTService],
})
export class NFTModule {}
