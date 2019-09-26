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
    box-sizing: border-box;
`

S.Top = styled.div`
    display: flex;  
    height: 25%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
`

S.Bottom = styled.div`
    display: flex;
    margin-top: 5vh;
    height: 59vh;
    justify-content: space-between;
    box-sizing: border-box;
`

S.CalendarContainer = styled.div`
    width: 59%;
    height: 100%;
    box-sizing: border-box;
`

S.H1 = styled.div`
    font-size: 36px;
    line-height: 1;
    font-weight: 900;
`
S.MonthAndButtons = styled.div`
    width: 100%;
    height: 6%
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    box-sizing: border-box;
`
S.Buttons = styled.div`
    width: 13%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
`
S.Button = styled.button`
    width: 50%;
    border: solid grey 1px;
    background: none;
    text-align: center;
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
                <S.MonthAndButtons>
                    <S.H1>September 2019</S.H1>
                    <S.Buttons>
                        <S.Button>&lt;</S.Button>
                        <S.Button>&gt;</S.Button>
                    </S.Buttons>
                </S.MonthAndButtons>
                <Calendar />
            </S.CalendarContainer>
            <DayInfo />
        </S.Bottom>
    </S.Container>
  );
}

export default Listing;