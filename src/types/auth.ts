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

type TSignup = {
  getTextInputProps: (
    name: "phoneNumber" | "height" | "userName" | "gender",
  ) => {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
  };
  touched: Record<string, boolean>;
  getPhoneNumInputProps: (
    name: "phoneNumber" | "height" | "userName" | "gender",
  ) => {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
  };
  errors: Record<string, string>;
};

export type { TAuth, TPhone, Tlogin, TSignup };
