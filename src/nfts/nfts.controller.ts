import { Body, Controller, Get, Post } from '@nestjs/common';
import { NftsService } from './nfts.service';
import { CreateNFTDto } from './dto/create-nft.dto';
import { Nft } from './schemas/nft.schema';

@Controller('nfts')
export class NftsController {
  constructor(private readonly nftsService: NftsService) {}

  @Post()
  async create(@Body() createNFTDto: CreateNFTDto) {
    await this.nftsService.create(createNFTDto);
  }

  @Get()
  async findAll(): Promise<Nft[]> {
    return this.nftsService.findAll();
  }
}
