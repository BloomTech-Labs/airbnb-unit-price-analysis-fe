import React from "react";
import styled from 'styled-components';

const Q3div = styled.div`
    height: 140vh;
    width: 100%;
    background-color: #c7c7c7;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
    const Spacer = styled.div`
        height: 100px;
    `

    const H1 = styled.h1`
        font-family: 'Varela Round', sans-serif;
    `

    const TextImageDiv = styled.div`
        display: flex;
        width: 80%;
        height: 25%;
        justify-content: space-between;
        margin: 40px 0px;
    `
    const TextImageDivR = styled(TextImageDiv)`
        flex-direction: row-reverse;
    `
        const ImageSect = styled.div`
            width: 25%;
            height: 100%;
            background-color: white;
            border-radius: 4px;
        `
        const TextSect = styled.div`
            width: 60%;
            height: 100%;
            font-family: 'Varela Round', sans-serif;
            font-size: 23px;
            line-height: 1.4;
        `


function Quadrant3() {
  return (
    <Q3div>
        <Spacer />
        <H1>How it works text</H1>
        <TextImageDiv>
            <ImageSect />
            <TextSect>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna elit, aliquam eget ornare vitae, scelerisque quis dui. Curabitur rhoncus urna ut bibendum viverra. Pellentesque tincidunt odio eleifend, volutpat turpis sed, consectetur turpis. Duis euismod nec sem a commodo. Etiam blandit ipsum odio. Sed vel lobortis justo. Donec nec tristique urna. Maecenas eget erat quis orci vehicula pellentesque. In at felis nec justo pretium tempor.
            </TextSect>
        </TextImageDiv>
        <TextImageDivR>
            <ImageSect />
            <TextSect>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna elit, aliquam eget ornare vitae, scelerisque quis dui. Curabitur rhoncus urna ut bibendum viverra. Pellentesque tincidunt odio eleifend, volutpat turpis sed, consectetur turpis. Duis euismod nec sem a commodo. Etiam blandit ipsum odio. Sed vel lobortis justo. Donec nec tristique urna. Maecenas eget erat quis orci vehicula pellentesque. In at felis nec justo pretium tempor.
            </TextSect>
        </TextImageDivR>
        <TextImageDiv>
            <ImageSect />
            <TextSect>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna elit, aliquam eget ornare vitae, scelerisque quis dui. Curabitur rhoncus urna ut bibendum viverra. Pellentesque tincidunt odio eleifend, volutpat turpis sed, consectetur turpis. Duis euismod nec sem a commodo. Etiam blandit ipsum odio. Sed vel lobortis justo. Donec nec tristique urna. Maecenas eget erat quis orci vehicula pellentesque. In at felis nec justo pretium tempor.
            </TextSect>
        </TextImageDiv>
        <Spacer />
    </Q3div>
  );
}

export default Quadrant3;