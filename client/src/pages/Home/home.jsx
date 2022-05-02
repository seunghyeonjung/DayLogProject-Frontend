import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GlobalHeader from "../../components/modules/globalHeader";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import MainCalendarWrapper from "../../components/sections/mainCalendarWrapper";
import axios from "axios";
import TodoSection from "../../components/sections/todoSection";
import CircularButton from "../../components/modules/circularButton";
import TodoPopup from "../../components/sections/todoPopup";
import todo_icon from "../../assets/icons/todo.svg";
import schedule_icon from "../../assets/icons/schedule.svg";
import water_icon from "../../assets/icons/water-black.svg";
import delete_icon from "../../assets/icons/delete-black.svg";
import {
  changeDayFull,
  printDayInfo,
  toDayInfo,
} from "../../services/calcDate";
import { useDispatch, useSelector } from "react-redux";
import OverLay from "../../components/modules/overLay";
import { changeTodoCalendar } from "../../store/actions/todo";
import { RequestSchedules } from "../../store/actions/schedule";
import { RequestCycleAsync } from "../../store/actions/cycle";
import { MakeCalendarEvents } from "../../services/calendar";

const Home = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const calendarRef = useRef();

  const [logined, setLogined] = useState(localStorage.getItem("access_token"));

  const [isToggle, setIsToggle] = useState(false);
  const [isTodoPopup, setIsTodoPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(toDayInfo());

  // 리덕스 생리 저장소 이용.
  // 음.. 캘린더 관련 파일을 새로 만드는 게 좋을 듯.
  // events는 생리 주기 정보, 할 일 목록을 리덕스에서 각각 받아와서
  // 캘린더에 맞는 형식으로 수정한 후, event 목록에 추가해서 state로 관리?
  const startArr = useSelector((state) => state.cycle.start_dates);
  const dueArr = useSelector((state) => state.cycle.due_dates);

  const events = MakeCalendarEvents(startArr, dueArr);
  console.log(events);
  // const events = [
  //   {
  //     title: "start_date",
  //     date: "2022-05-14",
  //     classNames: ["menstruation-start-date"],
  //   },
  //   {
  //     title: "start_date",
  //     date: "2022-05-04",
  //     classNames: ["menstruation-start-date"],
  //   },
  //   {
  //     title: "4월 start_date",
  //     date: "2022-04-29",
  //     classNames: ["menstruation-start-date"],
  //   },
  //   {
  //     title: "4월 예정일",
  //     date: "2022-04-26",
  //     classNames: ["menstruation-due-date"],
  //   },
  // ];

  // 월간 Todo 목록.
  const month_todos = useSelector((state) => state.todo.month_todos);
  const select_todos = month_todos.find(
    (daily_todos) => daily_todos.date === selectedDate.date
  );

  // 캘린더 날짜 클릭 이벤트
  // 날짜 선택 시, 버튼창 뜨도록...
  const onClickDate = (info) => {
    setIsToggle(true);

    const date = info.dateStr;
    const day = info.date.toString().split(" ")[0];
    setSelectedDate({
      date,
      day: changeDayFull(day),
    });
  };

  // 캘린더 달 prev, next 클릭 이벤트
  // calendar api를 이용하여 현재 년도와 달 정보 획득
  // 이전, 다음 달 이동 기능.
  const movePrevMonth = () => {
    const calendarApi = calendarRef.current._calendarApi;
    const { viewTitle } = calendarApi.getCurrentData();
    const [month, year] = viewTitle.split(" ");
    //  dispatch(changeTodoCalendar("prev", month, year));
    //  dispatch(RequestSchedules("prev", month, year));

    dispatch(RequestCycleAsync(month, year));

    calendarApi.prev();
  };

  const moveNextMonth = () => {
    const calendarApi = calendarRef.current._calendarApi;
    const { viewTitle } = calendarApi.getCurrentData();
    const [month, year] = viewTitle.split(" ");
    dispatch(changeTodoCalendar("next", month, year));

    calendarApi.next();
  };

  useEffect(() => {
    // console.log(logined);
    // 만약 로그인 페이지 이동이 귀찮다면
    // 이 부분 주석 해제해서 사용
    /*
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) navigate("/login");
    */
  }, [navigate]);

  // 로그아웃
  // localStrage의 access_token을 지워버림.
  const onLogout = async () => {
    localStorage.clear();

    // 로그아웃 api 호출.
    // 성공 후에 cookie에 refresh 토큰이 없는 것을 확인해야 함.
    await axios.delete("/api/members/logout");

    navigate("/login");
  };

  //
  // 아이콘 버튼을 통해 이동하는 함수들
  // todo 팝업 오픈
  const openTodoPopup = () => {
    setIsTodoPopup(true);
  };

  const closeTodoPopup = () => {
    setIsTodoPopup(false);
  };

  const moveSchedule = () => {
    // navigate("/schedule");

    navigate("/schedule", { state: selectedDate });
  };

  const moveMenstruation = () => {
    // 생리 설정 페이지 이동
    navigate("/menstruation");
  };

  // 현재 필요없는 코드.
  const onLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      {isTodoPopup && <OverLay onClick={closeTodoPopup} />}

      <GlobalHeader />

      <MainCalendarWrapper>
        <FullCalendar //
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          headerToolbar={{
            start: "",
            center: "customPrev title customNext",
            end: "",
          }}
          eventClick={function () {
            alert("hi");
          }}
          events={events}
          dateClick={(info) => {
            onClickDate(info);
          }}
          customButtons={{
            customPrev: {
              text: "<",
              click: function () {
                movePrevMonth();
              },
            },
            customNext: {
              text: ">",
              click: () => {
                moveNextMonth();
              },
            },
          }}
        />
      </MainCalendarWrapper>

      <section className="home-bottom">
        <h3 className="home-bottom-date">{printDayInfo(selectedDate)}</h3>

        <TodoSection
          // select_todo가 없다면 undefined 전달
          todos={select_todos && select_todos.todos}
        />
      </section>

      {isToggle && (
        <section className="btns-section">
          <CircularButton icon={todo_icon} onClick={openTodoPopup} />
          <CircularButton icon={schedule_icon} onClick={moveSchedule} />
          <CircularButton icon={water_icon} onClick={moveMenstruation} />
          <CircularButton
            icon={delete_icon}
            onClick={() => setIsToggle(false)}
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
