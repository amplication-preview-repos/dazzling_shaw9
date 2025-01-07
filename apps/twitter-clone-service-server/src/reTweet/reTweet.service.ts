import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReTweetServiceBase } from "./base/reTweet.service.base";

@Injectable()
export class ReTweetService extends ReTweetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
