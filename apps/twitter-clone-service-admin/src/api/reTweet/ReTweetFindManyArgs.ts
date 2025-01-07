import { ReTweetWhereInput } from "./ReTweetWhereInput";
import { ReTweetOrderByInput } from "./ReTweetOrderByInput";

export type ReTweetFindManyArgs = {
  where?: ReTweetWhereInput;
  orderBy?: Array<ReTweetOrderByInput>;
  skip?: number;
  take?: number;
};
