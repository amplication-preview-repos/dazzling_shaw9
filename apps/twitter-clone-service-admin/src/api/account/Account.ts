import { Like } from "../like/Like";

export type Account = {
  bio: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  likes?: Array<Like>;
  password: string | null;
  updatedAt: Date;
  username: string | null;
};
