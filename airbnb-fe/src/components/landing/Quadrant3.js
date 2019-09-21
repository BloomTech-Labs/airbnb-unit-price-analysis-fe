import React from "react";
import styled from 'styled-components';

const Q3div = styled.div`
    height: 130vh;
    width: 100%;
    background-color: #c7c7c7;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
    const Spacer = styled.div`
        height: 30px;
    `
    const TextImageDiv = styled.div`
        display: flex;
        width: 80%;
        height: 25%;
        justify-content: space-between;
    `
    const TextImageDivR = styled(TextImageDiv)`
        flex-direction: row-reverse;
    `
        const ImageSect = styled.div`
            width: 25%;
            height: 100%;
            background-color: white;
            border-radius: 3px;
        `
        const TextSect = styled.div`
            width: 60%;
            height: 100%;
        `


function Quadrant3() {
  return (
    <Q3div>
        <Spacer />
        <h1>How it works text</h1>
        <TextImageDiv>
            <ImageSect />
            <TextSect>
                kjadfowjb rweonerpf33r onrfoin3rf 3rfon3ro 3rofh3 rfoi3rnh 3rrfon
            </TextSect>
        </TextImageDiv>
        <TextImageDivR>
            <ImageSect />
            <TextSect>
                kjadfowjb rweonerpf33r onrfoin3rf 3rfon3ro 3rofh3 rfoi3rnh 3rrfon
            </TextSect>
        </TextImageDivR>
        <TextImageDiv>
            <ImageSect />
            <TextSect>
                kjadfowjb rweonerpf33r onrfoin3rf 3rfon3ro 3rofh3 rfoi3rnh 3rrfon
            </TextSect>
        </TextImageDiv>
        <Spacer />
    </Q3div>
  );
}

export default Quadrant3;