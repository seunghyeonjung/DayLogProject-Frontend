// 회원가입 관련
// ID 중복 확인용
export const SIGNUP_ID_START = "SIGNUP_ID_START";
export const SIGNUP_ID_SUCCESS = "SIGNUP_ID_SUCCESS";
export const SIGNUP_ID_FAIL = "SIGNUP_ID_FAIL";
// 기타
export const SIGNUP_PASSWD = "SIGNUP_PASSWD";
export const SIGNUP_EMAIL = "SIGNUP_EMAIL";
export const SIGNUP_NICKNAME = "SIGNUP_NICKNAME";
export const SIGNUP_NAME = "SIGNUP_NAME";
// 회원 등록 통신
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

// 로그인 관련
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT_USER = "LOGOUT_USER";

export const RESIGN_SUCCESS = "RESIGN_SUCCESS";
export const RESIGN_FAIL = "RESIGN_FAIL";

export const PROFILE_UPDATE_SUCCESS = "PROFILE_UPDATE_SUCCESS";
export const PROFILE_UPDATE_FAIL = "PROFILE_UPDATE_FAIL";
export const PROFILE_UPDATE_IMAGE_FAIL = "PROFILE_UPDATE_IMAGE_FAIL";

export const CHANGE_PASSWD_SUCCESS = "CHANGE_PASSWD_SUCCESS";
export const CHANGE_PASSWD_FAIL = "CHANGE_PASSWD_FAIL";
export const CHANGE_PASSWD_ERROR = "CHANGE_PASSWD_ERROR";

// ?
export const LOGIN_USER = "LOGIN_USER";

// Todo
export const ADD_TODO_SUCCESS = "ADD_TODO";
export const ADD_TODO_FAIL = "ADD_TODO";
export const REMOVE_TODO_SUCCESS = "REMOVE_TODO";
export const REMOVE_TODO_FAIL = "REMOVE_TODO";
export const CHANGE_TODO_STATE_SUCCESS = "CHANGE_TODO_STATE_SUCCESS";
export const CHANGE_TODO_STATE_FAIL = "CHANGE_TODO_STATE_FAIL";
export const CHANGE_TODO_CALENDAR_SUCCESS = "CHANGE_TODO_CALENDAR_SUCCESS";
export const CHANGE_TODO_CALENDAR_FAIL = "CHANGE_TODO_CALENDAR_FAIL";
export const TODO_SET_SELECTED_TODOS = "TODO_SET_SELECTED_TODOS";

// 생리 관련
export const CYCLE_CHANGE_SUCCESS = "CYCLE_CHANGE_SUCCESS";
export const CYCLE_CHANGE_FAIL = "CYCLE_CHANGE_FAIL";
export const CYCLE_INFO_REQUEST_SUCCESS = "CYCLE_INFO_REQUEST_SUCCESS";
export const CYCLE_INFO_REQUEST_EMPTY = "CYCLE_INFO_REQUEST_EMPTY";
export const CYCLE_INFO_REQUEST_FAIL = "CYCLE_INFO_REQUEST_FAIL";
export const CYCLE_TOGGLE_CHANGE = "CYCLE_TOGGLE_CHANGE";

// 일정 관련
export const SCHEDULE_REQUEST_SUCCESS = "SCHEDULE_REQUEST_SUCCESS";
export const SCHEDULE_REQUEST_EMPTY = "SCHEDULE_REQUEST_EMPTY";
export const SCHEDULE_REQUEST_FAIL = "SCHEDULE_REQUEST_FAIL";
export const SCHEDULE_ADD_SUCCESS = "SCHEDULE_ADD_SUCCESS";
export const SCHEDULE_ADD_FAIL = "SCHEDULE_ADD_FAIL";
export const SCHEDULE_CUR_SCHEDULE_SET = "SCHEDULE_CUR_SCHEDULE_SET";
export const SCHEDULE_REMOVE_SUCCESS = "SCHEDULE_REMOVE_SUCCESS";
export const SCHEDULE_REMOVE_FAIL = "SCHEDULE_REMOVE_FAIL";

// 일기 관련
export const DIARY_REQUEST_SUCCESS = "DIARY_REQUEST_SUCCESS";
export const DIARY_REQUEST_EMPTY = "DIARY_REQUEST_EMPTY";
export const DIARY_REQUEST_FAIL = "DIARY_REQUEST_FAIL";
export const DIARY_ADD_SUCCESS = "DIARY_ADD_SUCCESS";
export const DIARY_ADD_FAIL = "DIARY_ADD_FAIL";
export const DIARY_SELECT_SUCCESS = "DIARY_SELECT_SUCCESS";
export const DIARY_SELECT_FAIL = "DIARY_SELECT_FAIL";
export const DIARY_REMOVE_SUCCESS_FILL = "DIARY_REMOVE_SUCCESS_FILL";
export const DIARY_REMOVE_SUCCESS_EMPTY = "DIARY_REMOVE_SUCCESS_EMPTY";
export const DIARY_REMOVE_FAIL = "DIARY_REMOVE_FAIL";
export const DIARY_CHANGE_SHARE_SUCCESS_FILL =
  "DIARY_CHANGE_SHARE_SUCCESS_FILL";
export const DIARY_CHANGE_SHARE_FAIL = "DIARY_CHANGE_SHARE_FAIL";

export const DIARY_EDIT_SUCCESS = "DIARY_EDIT_SUCCESS";
export const DIARY_EDIT_FAIL = "DIARY_EDIT_FAIL";

// 게시판 관련
// -- 카테고리 조회
export const BOARD_LATEST_SUCCESS = "BOARD_LATEST_SUCCESS";
export const BOARD_LATEST_FAIL = "BOARD_LATEST_FAIL";
export const BOARD_HEARTEST_SUCCESS = "BOARD_HEARTEST_SUCCESS";
export const BOARD_HEARTEST_FAIL = "BOARD_HEARTEST_FAIL";
export const BOARD_SECRET_SUCCESS = "BOARD_SECRET_SUCCESS";
export const BOARD_SECRET_FAIL = "BOARD_SECRET_FAIL";
export const BOARD_SHARE_SUCCESS = "BOARD_SHARE_SUCCESS";
export const BOARD_SHARE_FAIL = "BOARD_SHARE_FAIL";
export const BOARD_SCRAP_SUCCESS = "BOARD_SCRAP_SUCCESS";
export const BOARD_SCRAP_FAIL = "BOARD_SCRAP_FAIL";
// -- 게시글, 프로필, 스크랩, 좋아요 등 조회
export const BOARD_REQUEST_DIARY_SUCCESS = "BOARD_REQUEST_DIARY_SUCCESS";
export const BOARD_REQUEST_DIARY_FAIL = "BOARD_REQUEST_DIARY_FAIL";
export const BOARD_REQUEST_PROFILE_SUCCESS = "BOARD_REQUEST_PROFILE_SUCCESS";
export const BOARD_REQUEST_PROFILE_FAIL = "BOARD_REQUEST_PROFILE_FAIL";
export const BOARD_CHANGE_HEART_SUCCESS = "BOARD_CHANGE_HEART_SUCCESS";
export const BOARD_CHANGE_HEART_FAIL = "BOARD_CHANGE_HEART_FAIL";
export const BOARD_CHANGE_SCRAP_SUCCESS = "BOARD_CHANGE_SCRAP_SUCCESS";
export const BOARD_CHANGE_SCRAP_FAIL = "BOARD_CHANGE_SCRAP_FAIL";

// 뱃지 관련
export const BADGE_REQUEST_SUCCESS = "BADGE_REQUEST_SUCCESS";
export const BADGE_REQUEST_FAIL = "BADGE_REQUEST_FAIL";
export const BADGE_CHALLENGE_SUCCESS = "BADGE_CHALLENGE_SUCCESS";
export const BADGE_CHALLENGE_FAIL = "BADGE_CHALLENGE_FAIL";
export const BADGE_SELECT = "BADGE_SELECT";
export const BADGE_REQUEST_CHALLENGE_BADGE_FILL =
  "BADGE_REQUEST_CHALLENGE_BADGE_FILL";
export const BADGE_REQUEST_CHALLENGE_BADGE_EMPTY =
  "BADGE_REQUEST_CHALLENGE_BADGE_EMPTY";
export const BADGE_REQUEST_CHALLENGE_BADGE_FAIL =
  "BADGE_REQUEST_CHALLENGE_BADGE_FAIL";

// QA 관련
export const QA_REQUEST_SUCCESS = "QA_REQUEST_SUCCESS";
export const QA_REQUEST_FAIL = "QA_REQUEST_FAIL";
export const QA_RESULT_SUCCESS = "QA_RESULT_SUCCESS";
export const QA_RESULT_FAIL = "QA_RESULT_FAIL";
