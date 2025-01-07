import { LikeUpdateManyWithoutAccountsInput } from "./LikeUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  bio?: string | null;
  email?: string | null;
  likes?: LikeUpdateManyWithoutAccountsInput;
  password?: string | null;
  username?: string | null;
};
