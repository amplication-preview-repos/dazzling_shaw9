import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type LikeWhereInput = {
  account?: AccountWhereUniqueInput;
  id?: StringFilter;
  tweet?: TweetWhereUniqueInput;
};
