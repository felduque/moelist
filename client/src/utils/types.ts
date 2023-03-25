export type User = {
  id: string;
  email: string;
  userName: string;
  avatar: string;
  role: string;
  binanceId?: string;
  paypal?: string;
  twitter?: string;
};

export type GetUserResponseType = {
  user: User;
  favorites: ContentType[];
};

export type LoginResp = {
  token: string;
};

export type ContentType = {
  id: number;
  title: string;
  contentType: string;
  demography: string;
  artist?: string;
  artists?: string[];
  genres?: string[];
  description: string;
  image: string;
  producers?: string[];
  rating?: number;
  score?: number;
  type?: string;
  studios?: string[];
  urlContent: string;
  source?: string;
  status: string;
  premiered?: string;
  season?: string;
  popularity?: number;
  User?: User;
  Scan: Scan;
  day: string;
  trailer?: string;
  authors?: string[];
  author?: string;
  duration?: string;
  favorites?: number;
  episodes?: number;
  chapters?: number;
};

export type Scan = {
  id: number;
  url: string;
  image: string;
};

export type LoginParams = {
  email?: string;
  password?: string;
};

export type RegisterParams = Partial<{
  email: string;
  password: string;
  userName: string;
  passwordConfirm: string;
}>;

export type EditUserParams = {};
