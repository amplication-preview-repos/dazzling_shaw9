import { ReTweet as TReTweet } from "../api/reTweet/ReTweet";

export const RETWEET_TITLE_FIELD = "originalTweet";

export const ReTweetTitle = (record: TReTweet): string => {
  return record.originalTweet?.toString() || String(record.id);
};
