import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";

export type AccountWhereInput = {
  bio?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
  password?: StringNullableFilter;
  username?: StringNullableFilter;
};
