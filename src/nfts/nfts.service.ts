import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose } from 'mongoose';
import { CreateNFTDto } from './dto/create-nft.dto';
import { UpdateNFTDto } from './dto/update-nft.dto';
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

  async findOne(hashcode: string): Promise<Nft> {
    return this.nftModel.findOne({ hashcode: hashcode });
  }

  async update(id: string, postData: UpdateNFTDto): Promise<Nft> {
    const post = await this.nftModel
      .findByIdAndUpdate({ _id: id }, postData, {new: true})
      .populate("name")
      .populate("priceSOL")
      .populate("hashcode");
    return post;
  }

  async delete(id: string){
    return await this.nftModel.findByIdAndDelete(id);
  }
}