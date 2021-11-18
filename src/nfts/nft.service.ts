import { Injectable, NotFoundException } from "@nestjs/common";
import { NFT } from "./nft.model";

@Injectable()
export class NFTService {
    nfts: NFT[] = [];

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
        const nft = this.nfts.find((prod) => prod.id == nftId);
        if(!nft) {
            return new NotFoundException('Niet gevonden pik');
        }
        return {...nft};
    }    
}