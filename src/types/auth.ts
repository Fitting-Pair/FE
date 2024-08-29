type TPhone = {
  phoneNumber: string;
};

type TAuth = {
  phoneNumber: string;
  userName: string;
  height: string;
  gender: string;
};

type Tlogin = {
  code: string;
  message: string;
  data: {
    id: number;
    userName: string;
    refreshToken: string;
    accessToken: string;
  };
};

export type { TAuth, TPhone, Tlogin };
