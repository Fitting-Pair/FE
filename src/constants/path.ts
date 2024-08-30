const PAGE_PATH = {
  BASE: "/",
  // auth
  LOGIN: "login",
  SIGN_UP: "sign-up",

  // body-check
  BODY_CHECK: "body-check",
  STYLEING: "styling",

  //my-page
  MY_PAGE: "/my-page",
  MODIFY: "modify",
  RESULT: "result",
  DETAIL: "detail",
};

const API_PATH = {
  // auth
  AUTH: "/auth",
  LOGIN: "login",
  SIGN_UP: "signup",
  LOGOUT: "logout",
  REFRESH: "auth/reissue-token",

  // image
  UPLOAD_USER_IMAGE: "/userimg/upload",

  // result
  RESULT: "/result",
  STYLING: "styling",

  // my-page
  MYPAGE: "mypage",
};

export { PAGE_PATH, API_PATH };
