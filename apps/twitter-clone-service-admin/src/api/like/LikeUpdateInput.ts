import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type LikeUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  tweet?: TweetWhereUniqueInput | null;
};
