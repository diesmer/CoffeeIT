import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NftsModule } from './nfts/nfts.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    NftsModule,
  ],
})
export class AppModule {}