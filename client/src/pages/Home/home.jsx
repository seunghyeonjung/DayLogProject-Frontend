import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalHeader from "../../components/modules/globalHeader";
import MainCalendarWrapper from "../../components/sections/mainCalendarWrapper";
import TodoSection from "../../components/sections/todoSection";
import CircularButton from "../../components/modules/circularButton";
import TodoPopup from "../../components/sections/todoPopup";
import OverLay from "../../components/modules/overLay";
import todo_icon from "../../assets/icons/todo.svg";
import schedule_icon from "../../assets/icons/schedule.svg";
import water_icon from "../../assets/icons/water-black.svg";
import delete_icon_white from "../../assets/icons/close-icon-white.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { printDayInfo, toDayInfo } from "../../services/calcDate";
import { SetAuthHeader } from "../../services/auth";
import SideSlideNavigation from "../../components/sections/sideSlideNavigation";
import { RequestChallengeBadgeAsync } from "../../store/actions/badge";

const Home = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [logined, setLogined] = useState(localStorage.getItem("access_token"));

  const [isToggle, setIsToggle] = useState(false);
  // const [sidebarToggle, setSidebarToggle] = useState(true);

  const [isTodoPopup, setIsTodoPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(toDayInfo());

  // 월간 Todo 목록.
  const month_todos = useSelector((state) => state.todo.month_todos);
  const select_todos = month_todos.find(
    (daily_todos) => daily_todos.date === selectedDate.date
  );

  useEffect(() => {
    SetAuthHeader();
    dispatch(RequestChallengeBadgeAsync());
  }, [dispatch]);

  // 로그아웃
  const onLogout = async () => {
    // auth action 에 구현해두었음.
    // localStorage.clear();
    // // 로그아웃 api 호출.
    // // 성공 후에 cookie에 refresh 토큰이 없는 것을 확인해야 함.
    // await axios.delete("/api/members/logout");
    // navigate("/login");
  };
  // ======================================
  //

  // todo 팝업 오픈 관련 및 화면 이동 함수들
  const openTodoPopup = () => {
    setIsTodoPopup(true);
  };

  const closeTodoPopup = () => {
    setIsTodoPopup(false);
  };

  const moveSchedule = () => {
    // navigate("/schedule", { state: selectedDate });
    navigate(`/schedule?date=${selectedDate.date}&day=${selectedDate.day}`);
  };

  const moveMenstruation = () => {
    navigate("/menstruation");
  };
  // ======================================

  return (
    <div>
      {isTodoPopup && <OverLay onClick={closeTodoPopup} />}

      <GlobalHeader />

      <MainCalendarWrapper
        setIsToggle={setIsToggle}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      ></MainCalendarWrapper>

      <section className="home-bottom">
        <h3 className="home-bottom-date">{printDayInfo(selectedDate)}</h3>

        <TodoSection
          // select_todo가 없다면 undefined 전달
          todos={select_todos && select_todos.todos}
          is_home={true}
        />
      </section>

      {isToggle && (
        <section className="btns-section">
          <CircularButton icon={todo_icon} onClick={openTodoPopup} />
          <CircularButton icon={schedule_icon} onClick={moveSchedule} />
          <CircularButton icon={water_icon} onClick={moveMenstruation} />
          <CircularButton
            icon={delete_icon_white}
            onClick={() => setIsToggle(false)}
            option="circle-btn-delete"
          />
        </section>
      )}

      {isTodoPopup && (
        <TodoPopup
          date={printDayInfo(selectedDate)}
          dateFormat={selectedDate}
          // select_todo가 없다면 undefined 전달
          todos={select_todos && select_todos.todos}
          closePopup={closeTodoPopup}
        />
      )}
    </div>
  );
};

export default Home;
