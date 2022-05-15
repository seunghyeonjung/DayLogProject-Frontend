import axios from "axios";
import { BOARD_LATEST_FAIL, BOARD_LATEST_SUCCESS } from "./types";

// 최신순 조회 요청 함수
export const RequestLatestBoardAsync = () => async (dispatch, getState) => {
  try {
    // const res = await axios.get("/api/board/latest");
    // const { latest_diary } = res.data;

    // 테스트용
    const latest_diary = [
      {
        diary_no: 13,
        content: "일기 내용...",
        image_url: "http://image.png",
        like_count: 100,
        date: "2022-05-01",
      },
      {
        diary_no: 14,
        content: "일기 내용 2...",
        image_url: null,
        like_count: 30,
        date: "2022-05-03",
      },
    ];

    dispatch({
      type: BOARD_LATEST_SUCCESS,
      payload: {
        latest_diary,
      },
    });
  } catch (e) {
    console.error(e);

    alert("최신순 조회 실패");
    console.log("Request Latest Board Async func fail");

    dispatch({
      type: BOARD_LATEST_FAIL,
    });
  }
};
