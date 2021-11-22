import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { NFTService } from './nft.service';

@Controller('nft')
export class NFTController {
  constructor(private nftService: NFTService) {}

  @Post()
  newNFT(
    @Body('collection') nftCollection: string,
    @Body('name') nftName: string,
    @Body('priceSOL') nftPriceSOL: number,
    @Body('hashcode') nftHashcode: string,
  ) {
    const generatedId = this.nftService.addNFT(nftCollection, nftName, nftPriceSOL, nftHashcode);
    return {id: generatedId};
  }

  @Get()
  getAllNFT(){
    return this.nftService.getNFTs();
  }

  @Get(':id')
  getNFT(@Param('id') nftId: string) {
    return this.nftService.getSingleNFT(nftId);
  }

  @Patch(':id')
  updateNFT(
    @Param('id') nftId: string,
    @Body('collection') nftCollection: string,
    @Body('name') nftName: string,
    @Body('priceSOL') nftPriceSOL: number,
    @Body('hashcode') nftHashcode: string,
  ){
    this.nftService.updateNFT(nftId, nftCollection, nftName, nftPriceSOL, nftHashcode);
    return null;
  }
  
  @Delete(':id')
  deleteNFT(@Param('id') nftId: string) {
    this.nftService.deleteNFT(nftId);
    return null;
  }
}
