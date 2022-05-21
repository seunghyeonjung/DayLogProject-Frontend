import axios from "axios";
import { BADGE_REQUEST_FAIL, BADGE_REQUEST_SUCCESS } from "./types";

// 뱃지 목록 조회 요청 함수
export const RequestBadgeListAsync = () => async (dispatch) => {
  try {
    // const res = await axios.get("/api/badge");
    // const { badges } = res.data;

    // 테스트용
    const badges = [
      {
        badge_no: 1,
        badge_name: "뱃지 이름 1",
        badge_url: null,
        challenge: false,
        goal_count: 1,
        final_count: 10,
        is_complete: false,
        description: "뱃지 이름 1의 뱃지 설명",
      },
      {
        badge_no: 2,
        badge_name: "뱃지 이름 2",
        badge_url: null,
        challenge: false,
        goal_count: 2,
        final_count: 10,
        is_complete: true,
        description: "뱃지 이름 2의 뱃지 설명",
      },
      {
        badge_no: 3,
        badge_name: "뱃지 이름 3",
        badge_url: null,
        challenge: false,
        goal_count: 3,
        final_count: 10,
        is_complete: false,
        description: "뱃지 이름 3의 뱃지 설명",
      },
    ];

    const challenge_badge = FindChallengeBadge(badges);

    dispatch({
      type: BADGE_REQUEST_SUCCESS,
      payload: {
        badges,
        challenge_badge,
      },
    });
  } catch (e) {
    console.error(e);

    alert("뱃지 목록 조회 실패");
    console.log("뱃지 목록 조회 실패");

    dispatch({
      type: BADGE_REQUEST_FAIL,
    });
  }
};

function FindChallengeBadge(badgeArr) {
  const findBadge = badgeArr.find((badge) => badge.challenge === true);

  return findBadge;
}
