import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose } from 'mongoose';
import { CreateNFTDto } from './dto/create-nft.dto';
import { Nft, NftDocument } from './schemas/nft.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class NftsService {
  constructor(
    @InjectModel(Nft.name) private readonly nftModel: Model<NftDocument>,
  ) {}

  async create(createNFTDto: CreateNFTDto): Promise<Nft> {
    const createdNft = await this.nftModel.create(createNFTDto);
    return createdNft;
  }

  async findAll(): Promise<Nft[]> {
    return this.nftModel.find().exec();
  }

  async findNft(name: string): Promise<Nft> {
    return this.nftModel.findOne({name: name});
  }
}
