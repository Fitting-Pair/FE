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
  EDIT: "edit",
};

const API_PATH = {
  // auth
  AUTH: "/auth",
  LOGIN: "login",
  SIGN_UP: "signup",
  LOGOUT: "logout",
  REFRESH: "auth/reissue-token",
  USERS: "users",

  // image
  UPLOAD_USER_IMAGE: "/userimg/upload",

  // result
  RESULT: "/result",
  STYLING: "styling",

  // my-page
  MYPAGE: "mypage",
  MYPAGE_RESULT: "/mypage/result",
  EDIT_INFO: "/mypage/info",
};

export { PAGE_PATH, API_PATH };
