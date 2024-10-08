import { IPhone, IAuthInfo } from "@/types/auth";

function validatePhoneNumber(values: IPhone) {
  const errors = {
    phoneNumber: "",
  };

  if (!/^\d{3}-\d{4}-\d{4}$/.test(values.phoneNumber)) {
    errors.phoneNumber =
      "올바른 휴대폰 전화번호 형식이 아닙니다. (11자리로 입력해주세요)";
  }

  return errors;
}

function validateSignUp(values: IAuthInfo) {
  const errors = {
    userName: "",
    phoneNumber: "",
    height: "",
    gender: "",
  };

  if (values.userName === "") {
    errors.userName = "닉네임을 입력해주세요.";
  } else if (values.userName.length > 5) {
    errors.userName = "닉네임은 5자 이내로 입력해주세요.";
  }

  if (!/^\d{3}-\d{4}-\d{4}$/.test(values.phoneNumber)) {
    errors.phoneNumber =
      "올바른 휴대폰 전화번호 형식이 아닙니다. (010-XXXX-XXXX)";
  }

  if (values.height === "") {
    errors.height = "키를 입력해주세요.";
  } else if (!/^\d{3}$/.test(values.height as string)) {
    errors.height = "3자리 숫자로 입력해주세요.";
  }

  if (values.gender === "") {
    errors.gender = "성별을 선택해주세요.";
  }

  return errors;
}

export { validatePhoneNumber, validateSignUp };
