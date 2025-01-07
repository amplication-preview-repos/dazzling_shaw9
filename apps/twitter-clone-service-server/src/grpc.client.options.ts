import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["user", "tweet", "follow", "retweet", "like", "account"],
    protoPath: [
      "src/user/user.proto",
      "src/tweet/tweet.proto",
      "src/follow/follow.proto",
      "src/retweet/retweet.proto",
      "src/like/like.proto",
      "src/account/account.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
