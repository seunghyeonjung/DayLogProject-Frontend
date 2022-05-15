import { useNavigate } from "react-router-dom";
import InputHeader from "../../../components/modules/inputHeader";
import default_profile from "../../../assets/img/default-profile.svg";
import dummy_image from "../../../assets/img/dummy-image.png";
import heart_icon from "../../../assets/icons/heart-pink-icon.svg";
import star_icon from "../../../assets/icons/star-yellow-icon.svg";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const BoardDescription = (props) => {
  const navigate = useNavigate();

  const selected_diary = useSelector((state) => state.board.selected_diary);
  const {
    diary_no,
    content,
    image_url,
    like_count,
    date,
    writer_nickname,
    writer_profile_url,
  } = selected_diary;

  // 새로고침 시, 리덕스의 데이터가 사라지기 때문에
  // 게시판 홈으로 이동
  useEffect(() => {
    if (selected_diary.diary_no === undefined) {
      navigate("/board");
    }
  }, [navigate, selected_diary]);

  const moveBack = () => {
    navigate("/board");

    // 추후에 홈으로 갈지,
    // 아니면 타인 프로필 페이지 or 마이 페이지 스크랩?
    // 으로 갈지 결정.
  };

  const moveProfile = () => {
    navigate("/board/other?member=test");
  };

  return (
    <div className="board-desc">
      <InputHeader text="이전으로" onClick={moveBack} />

      <header className="board-desc-profile-info" onClick={moveProfile}>
        <div className="board-desc-image-container">
          <img
            src={writer_profile_url ? writer_profile_url : default_profile}
            alt="유저 프로필 이미지"
          />
        </div>
        <span className="board-desc-nickname">{writer_nickname}</span>
      </header>

      <main className="board-desc-main">
        {/* 이미지 유무에 따라 */}
        {true && (
          <div className="board-desc-main-image">
            <img src={image_url ? image_url : dummy_image} alt="일기 이미지" />
          </div>
        )}

        <div className="board-desc-main-text">
          <textarea
            className={`board-form-textarea`}
            defaultValue={content}
            disabled
          ></textarea>
          <span className="board-date">{date}</span>
        </div>
      </main>

      <footer className="board-desc-footer">
        <button className="board-desc-footer-btn btn-40 btn-outlined">
          <img className="btn-heart" src={heart_icon} alt="하트 아이콘" />
          <span>{like_count}</span>
        </button>

        <button className="board-desc-footer-btn btn-40 btn-primary">
          <img className="btn-star" src={star_icon} alt="별 아이콘" />
          <span>스크랩</span>
        </button>
      </footer>
    </div>
  );
};

export default BoardDescription;
