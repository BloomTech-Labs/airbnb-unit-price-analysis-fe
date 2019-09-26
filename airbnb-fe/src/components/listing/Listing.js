import React from "react";
import styled from 'styled-components';

import ResultBox from './ResultBox';
import MessageBox from "./MessageBox";
import Calendar from "../calendar/Calendar";
import DayInfo from "./DayInfo";

const S = {}

S.Container = styled.div`
    width: 89%;
    margin: auto;
    margin-top: 16.5vh;
    height: 110vh;
    display: flex;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;

`

S.Top = styled.div`
    display: flex;  
    height: 25%;
    display: flex;
    justify-content: space-between;
`

S.Bottom = styled.div`
    display: flex;
    margin-top: 5vh;
    height: 59vh;
    justify-content: space-between;
`

S.CalendarContainer = styled.div`
    width: 59%;
    height: 100%;
`

S.H1 = styled.div`
    font-size: 36px;
    line-height: 1;
    font-weight: 900
`

function Listing() {
  return (
    <S.Container>
        <S.Top>
            <ResultBox />
            <MessageBox />
        </S.Top>
        <S.Bottom>
            <S.CalendarContainer>
                <S.H1>September 2019</S.H1>
                <Calendar />
            </S.CalendarContainer>
            <DayInfo />
        </S.Bottom>
    </S.Container>
  );
}

export default Listing;