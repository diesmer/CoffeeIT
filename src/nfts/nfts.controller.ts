import { Body, Controller, Get, Param, Post, Patch, Delete } from '@nestjs/common';
import { NftsService } from './nfts.service';
import { CreateNFTDto } from './dto/create-nft.dto';
import { UpdateNFTDto } from './dto/update-nft.dto';
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

  @Get(':hashcode')
  async findOne(@Param('hashcode') hashcode: string) {
    return this.nftsService.findOne(hashcode);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() post: UpdateNFTDto
  ) {
    await this.nftsService.update(id, post);
    return `updated NFT ${id}`;
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    await this.nftsService.delete(id);
    return `deleted NFT ${id}`;
  }
}