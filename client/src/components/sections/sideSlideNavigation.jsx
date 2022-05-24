import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MenuWhiteIcon from "../../assets/icons/menu-white.svg";
import default_profile from "../../assets/img/default-profile.jpeg";
import NavMenuItem from "../modules/navMenu";

const SideSlideNavigation = ({ isOpen, closeToggle }) => {
  const navigate = useNavigate();

  const nickname = useSelector((state) => state.auth.nickname);
  const profile_image = useSelector((state) => state.auth.profile_image_url);

  const closeMenu = () => {
    closeToggle();
  };

  const moveHome = () => {
    navigate("/");
    closeToggle();
  };

  const moveDiary = () => {
    navigate("/diary");
    closeToggle();
  };

  const moveDiet = () => {
    alert("구현 중");
    return;
    // navigate('/diet');
  };

  const moveBadge = () => {
    navigate("/badge");
    closeToggle();
  };

  const moveBoard = () => {
    navigate("/board");
    closeToggle();
  };

  const moveMypage = () => {
    navigate("/mypage");
  };

  const onLogout = () => {
    // 추후 로그아웃 기능 추가.
    alert("구현 중");
    return;
  };

  return (
    <div
      className={`slide-bar ${isOpen ? "slide-bar-open" : "slide-bar-close"} `}
    >
      <header className="slide-bar-header">
        <button className="slide-bar-header-menu-icon" onClick={closeMenu}>
          <img src={MenuWhiteIcon} alt="메뉴 접기 아이콘" />
        </button>
        <div className="slide-bar-header-user">
          <div className="slide-bar-header-user-profile">
            <img
              src={profile_image ? profile_image : default_profile}
              alt="프로필 사진"
              onClick={moveMypage}
            />
          </div>
          <span className="slide-bar-header-user-name" onClick={moveMypage}>
            {nickname}
          </span>
        </div>
      </header>
      <nav className="slide-bar-nav">
        <ul className="slide-bar-nav-container">
          <NavMenuItem name="홈" onClick={moveHome} />
          <NavMenuItem name="일기" onClick={moveDiary} />
          <NavMenuItem name="식단" onClick={moveDiet} />
          <NavMenuItem name="뱃지 컬렉션" onClick={moveBadge} />
          <NavMenuItem name="공유 일기 게시판" onClick={moveBoard} />
          <NavMenuItem name="마이 페이지 및 설정" onClick={moveMypage} />
          <NavMenuItem name="로그아웃" onClick={onLogout} />
        </ul>
      </nav>
    </div>
  );
};

export default SideSlideNavigation;
