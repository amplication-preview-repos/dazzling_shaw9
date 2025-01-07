import { LikeCreateNestedManyWithoutAccountsInput } from "./LikeCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  bio?: string | null;
  email?: string | null;
  likes?: LikeCreateNestedManyWithoutAccountsInput;
  password?: string | null;
  username?: string | null;
};
