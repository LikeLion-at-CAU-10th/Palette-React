import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "../styles/calendarStyle.css";
import data from "../data/calendarData";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

// const PaletteColor = styled.div`
//   position: absolute;
//   background: ${(props) => props.color};
//   opacity: 1;
//   top: 3vw;
//   left: ${(props) => props.left};
//   border-radius: 100%;
//   cursor: pointer;
//   transition: 0.1s;
//   width: 2vw;
//   height: 2vw;
// `;

const Colored = styled.div`
  background: ${(props) => props.bgColor};
  border-radius: 50%;
  height: 14px;
  width: 14px;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const PaletteDom = styled.div`
  display: flex;
  width: 12vw;
  justify-content: space-between;
`;
const Palette = styled.div`
  opacity: 1;
  border-radius: 100%;
  cursor: pointer;
  transition: 0.1s;
  min-width: 2vw;
  min-height: 2vw;
  background: ${(props) => props.color};
`;

const PaletteZone = styled.div`
  display: flex;
  width: 950px;
  justify-content: flex-end;
  margin-bottom: 1.5vh;
`;
const CalendarPage = () => {
  const [value, onChange] = useState(new Date());
  const [mark, setMark] = useState([]);
  const { color } = useParams();
  const folderList = ["red", "orange", "yellow", "green", "blue"];
  const navigate = useNavigate();
  const goToAnotherColor = (color) => {
    navigate(`/calendar/${color}`);
  };

  const selectPaletteColor = (color) => {
    switch (color) {
      case "red":
        return "#ff8b8be6";
      case "orange":
        return "#ffad60";
      case "yellow":
        return "rgba(250, 232, 76, 0.9)";
      case "green":
        return "#83e686e6";
      case "blue":
        return "hsl(227, 100%, 64%)";
      default:
        return "#FFFFF";
    }
  };

  const selectDomColor = (color) => {
    switch (color) {
      case "red":
        return "#FEA8A7";
      case "orange":
        return "#FDD9A7";
      case "yellow":
        return "#FFF3BF";
      case "green":
        return "#8CE999";
      case "blue":
        return "#6989ff";
      default:
        return "#FFFFF";
    }
  };

  const realBgColor = selectDomColor(color);

  useEffect(() => {
    // const fetchData = async ()=> {
    //   const response = await axios.get(`palette.com/calendar/${color}`).then((response)=>{
    //     setMark(response.data)
    //   })
    // }
    setMark(data.postsDetail);
  }, []);

  console.log(folderList);

  return (
    <>
      <CalendarDom bgColor={realBgColor}>
        <PaletteZone>
          <PaletteDom>
            {folderList.map((folder, i) => (
              <Palette
                onClick={() => {
                  goToAnotherColor(folder);
                }}
                key={i}
                color={selectPaletteColor(folder)}
              />
            ))}
          </PaletteDom>
        </PaletteZone>

        <Calendar
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
              (x) => x.date === moment(date).format("YYYY-MM-DD")
            );
            if (selected) {
              html.push(<Colored bgColor={selected.color} />);
            }
            // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
            return <Dom>{html}</Dom>;
          }}
        />
      </CalendarDom>
    </>
  );
};

export default CalendarPage;
