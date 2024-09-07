type TPhone = {
  phoneNumber: string;
};

type TAuth = {
  phoneNumber: string;
  userName: string;
  height: string;
  gender: string;
};

type TUser = TAuth & {
  id: number;
};

type TAuthProps = {
  phoneNumber: string;
  userName: string;
  height: number;
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

type TSignup = {
  code: string;
  message: string;
};

type TSignupProps = {
  getGenderButtonProps?: (
    name: "gender",
    gender: string,
  ) => {
    selected: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onBlur: () => void;
  };
  getTextInputProps: (
    name: "phoneNumber" | "height" | "userName" | "gender",
  ) => {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
  };
  touched: Record<string, boolean>;
  getPhoneNumInputProps: (name: "phoneNumber") => {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
  };
  errors: Record<string, string>;
};

interface IUserInfo {
  id: number;
  userName: string;
  phoneNumber: string;
  height: number;
  gender: string;
}

export type {
  TAuth,
  TPhone,
  TAuthProps,
  Tlogin,
  TSignup,
  TSignupProps,
  TUser,
  IUserInfo,
};
