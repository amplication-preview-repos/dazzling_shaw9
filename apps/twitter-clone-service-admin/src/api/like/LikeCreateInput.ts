import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type LikeCreateInput = {
  account?: AccountWhereUniqueInput | null;
  tweet?: TweetWhereUniqueInput | null;
};
