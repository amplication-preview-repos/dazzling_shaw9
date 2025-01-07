import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReTweetModuleBase } from "./base/reTweet.module.base";
import { ReTweetService } from "./reTweet.service";
import { ReTweetController } from "./reTweet.controller";
import { ReTweetGrpcController } from "./reTweet.grpc.controller";
import { ReTweetResolver } from "./reTweet.resolver";

@Module({
  imports: [ReTweetModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReTweetController, ReTweetGrpcController],
  providers: [ReTweetService, ReTweetResolver],
  exports: [ReTweetService],
})
export class ReTweetModule {}
