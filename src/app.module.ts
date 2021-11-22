import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NFTModule } from './nfts/nft.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    NFTModule,
    MongooseModule.forRoot(
      'mongodb+srv://root:PVRDf3oyTjl9nz2e@nft.gjdrk.mongodb.net/nodejs-test?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
