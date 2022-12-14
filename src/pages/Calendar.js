import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "../styles/calendarStyle.css";
import data from "../data/calendarData";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

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
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const PaletteDom = styled.div`
  display: flex;
  flex-direction: column;
`;

const Palette = styled.div`
  opacity: 1;
  border-radius: 0 40% 40% 0;
  margin-top: 15%;
  cursor: pointer;
  transition: 0.1s;
  min-width: 2vw;
  min-height: 2vw;
  background: ${(props) => props.color};
`;

const PaletteZone = styled.div`
  display: flex;
  flex-direction: column;
`;

const CalendarZone = styled.div`
  display: flex;
  height: 80%;
  margin-top: 4%;
`;

export const selectDomColor = (color) => {
  switch (color) {
    case "red":
      return "#FEA8A7";
    case "orange":
      return "#FAC379";
    case "yellow":
      return "#FCED9D";
    case "green":
      return "#8CE999";
    case "blue":
      return "#91A6FF";
    case "purple":
      return "#E499F6";
    case "gray":
      return "#CFD4DA";
    default:
      return "#FFFFF";
  }
};
export const folderList = [
  "gray",
  "blue",
  "green",
  "yellow",
  "orange",
  "red",
  "purple",
];

const CalendarPage = () => {
  const [value, onChange] = useState(new Date());
  const [mark, setMark] = useState([]);
  const { color } = useParams();

  const navigate = useNavigate();
  const goToAnotherColor = (color) => {
    navigate(`/calendar/${color}`);
  };

  const selectPaletteColor = (color) => {
    switch (color) {
      case "red":
        return "#FF3A3A";
      case "orange":
        return "#FF8D23";
      case "yellow":
        return "#F6E225";
      case "green":
        return "#55D65A";
      case "blue":
        return "#0038FF";
      case "purple":
        return "#CD62FF";
      case "gray":
        return "#656565";
      default:
        return "#FFFFF";
    }
  };

  const realBgColor = selectDomColor(color);

  useEffect(() => {
    setMark(data.postsDetail);
  }, []);

  console.log(folderList);

  return (
    <>
      <CalendarDom bgColor={realBgColor}>
        <CalendarZone>
          <Calendar
            maxDetail="month" // ?????? ????????????????????? '???' ????????? ????????? ??????
            navigationLabel={null}
            showNeighboringMonth={true} //  ??????, ?????? ?????? ????????? ????????? ????????? ??????
            className="mx-auto w-full text-sm border-b"
            locale="en"
            tileContent={({ date, view }) => {
              // ?????? ????????? ????????? ???????????? (html ??????)
              // ????????? html ????????? ?????? ?????????
              let html = [];
              // ?????? ????????? post ????????? ?????? ??????(mark)??? ?????????, dot div ??????
              const selected = mark.find(
                (x) => x.date === moment(date).format("YYYY-MM-DD")
              );
              if (selected) {
                html.push(<Colored bgColor={selected.color} />);
              }
              // ?????? ????????? ????????? html.push ??? ???????????? html ????????? ????????? ??? ??????.
              return <Dom>{html}</Dom>;
            }}
          />
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
        </CalendarZone>
      </CalendarDom>
    </>
  );
};

export default CalendarPage;
