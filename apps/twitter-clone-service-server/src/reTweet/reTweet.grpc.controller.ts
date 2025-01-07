import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReTweetService } from "./reTweet.service";
import { ReTweetGrpcControllerBase } from "./base/reTweet.grpc.controller.base";

@swagger.ApiTags("reTweets")
@common.Controller("reTweets")
export class ReTweetGrpcController extends ReTweetGrpcControllerBase {
  constructor(protected readonly service: ReTweetService) {
    super(service);
  }
}
