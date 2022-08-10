import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "./calendarStyle.css";
import data from "../data/calendarData";
import styled from "styled-components";

const Colored = styled.div`
  background: ${(props) => props.bgColor};
  height: 15px;
  width: 15px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
`;

const Dom = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
`;

const CalendarDom = styled.div`
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CalendarPage = () => {
  const [value, onChange] = useState(new Date());
  const [mark, setMark] = useState([]);

  useEffect(() => {
    setMark(data.postsDetail);
  }, []);

  return (
    <CalendarDom bgColor={"#3274ba"}>
      <Calendar
        navigationAriaLabel="Go up"
        onChange={onChange} // useState로 포커스 변경 시 현재 날짜 받아오기
        formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
        value={value}
        minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        navigationLabel={null}
        showNeighboringMonth={true} //  이전, 이후 달의 날짜는 보이지 않도록 설정
        className="mx-auto w-full text-sm border-b"
        locale="en"
        tileContent={({ date, view }) => {
          // 날짜 타일에 컨텐츠 추가하기 (html 태그)
          // 추가할 html 태그를 변수 초기화
          let html = [];
          // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
          const selected = mark.find(
            (x) => x.when === moment(date).format("YYYY-MM-DD")
          );
          if (selected) {
            html.push(<Colored bgColor={selected.color} />);
          }
          // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
          return <Dom>{html}</Dom>;
        }}
      />
    </CalendarDom>
  );
};

export default CalendarPage;
