import { SortOrder } from "../../util/SortOrder";

export type ReTweetOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  originalTweet?: SortOrder;
  retweeter?: SortOrder;
  updatedAt?: SortOrder;
};
