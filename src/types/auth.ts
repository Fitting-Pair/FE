interface IPhone {
  phoneNumber: string;
}

interface IAuthInfo extends IPhone {
  userName: string;
  height: number | string;
  gender: string;
}

interface IUserInfo extends IAuthInfo {
  id: number;
}

interface ILogin {
  id: number;
  userName: string;
  refreshToken: string;
  accessToken: string;
  nickName: string;
}

interface ISignupProps {
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
}

export type { IUserInfo, IPhone, IAuthInfo, ILogin, ISignupProps };
