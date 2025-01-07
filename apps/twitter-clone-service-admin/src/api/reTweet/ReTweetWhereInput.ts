import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ReTweetWhereInput = {
  id?: StringFilter;
  originalTweet?: StringNullableFilter;
  retweeter?: StringNullableFilter;
};
