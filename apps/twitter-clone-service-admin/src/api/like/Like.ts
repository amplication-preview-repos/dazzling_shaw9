import { Account } from "../account/Account";
import { Tweet } from "../tweet/Tweet";

export type Like = {
  account?: Account | null;
  createdAt: Date;
  id: string;
  tweet?: Tweet | null;
  updatedAt: Date;
};
