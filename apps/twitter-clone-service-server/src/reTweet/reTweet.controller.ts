import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReTweetService } from "./reTweet.service";
import { ReTweetControllerBase } from "./base/reTweet.controller.base";

@swagger.ApiTags("reTweets")
@common.Controller("reTweets")
export class ReTweetController extends ReTweetControllerBase {
  constructor(
    protected readonly service: ReTweetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
