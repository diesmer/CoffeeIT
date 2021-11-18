import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { NFTService } from './nft.service';

@Controller('nft')
export class NFTController {
  constructor(private nftService: NFTService) {}

  @Post()
  newNFT(
    @Body('collection') prodCollection: string,
    @Body('name') prodName: string,
    @Body('priceSOL') prodPriceSOL: number,
    @Body('hashcode') prodHashcode: string,
  ) {
    const generatedId = this.nftService.addNFT(prodCollection, prodName, prodPriceSOL, prodHashcode);
    return {id: generatedId};
  }

  @Get()
  getAllNFT(){
    return this.nftService.getNFTs();
  }

  @Get(':id')
  getNFT(@Param('id') prodId: string) {
    return this.nftService.getSingleNFT(prodId);
  }

  
}
