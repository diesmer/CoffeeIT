import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NFT } from "./nft.model";

@Injectable()
export class NFTService {
    nfts: NFT[] = [];
    
    constructor(@InjectModel('Nft') private readonly nftModel: Model<NFT>) {}

    addNFT(collection: string, name: string, priceSOL: number, hashcode: string) {
        const prodId = Math.random().toString();
        const newNFT = new NFT(prodId, collection, name, priceSOL, hashcode)
        this.nfts.push(newNFT);
        return prodId;
    }

    getNFTs() {
        return [...this.nfts];
    }

    getSingleNFT(nftId: string) {
        const nft = this.findNFT(nftId)[0];
        return {...nft};
    }    

    updateNFT(nftId: string, collection: string, name: string, priceSOL: number, hashcode: string) {
        const [nft, index] = this.findNFT(nftId);
        const updatedNFT = {...nft};
        if(collection){
            updatedNFT.collection = collection;
        }
        if(name){
            updatedNFT.name = name;
        }
        if(priceSOL){
            updatedNFT.priceSOL = priceSOL;
        }
        if(hashcode){
            updatedNFT.hashcode = hashcode;
        }
        this.nfts[index] = updatedNFT;

    }

    deleteNFT(nftId: string) {
        const index = this.findNFT(nftId)[1];
        this.nfts.splice(index, 1);
    }

    private findNFT(nftId: string) : [NFT, number] {
        const nftIndex = this.nfts.findIndex((prod) => prod.id == nftId);
        const nft = this.nfts[nftIndex];
        if(!nft) {
            throw new NotFoundException('Niet gevonden pik');
        }
        return [nft, nftIndex];
    }

}