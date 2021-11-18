import { Module } from "@nestjs/common";
import { NFTController } from "./nft.controller";
import { NFTService } from "./nft.service";

@Module({
    imports: [],
    controllers: [NFTController],
    providers: [NFTService],
})
export class NFTModule {}
