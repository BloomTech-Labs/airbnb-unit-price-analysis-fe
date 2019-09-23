import React from "react";
import styled from 'styled-components';

import QuoteContainer from './QuoteContainer';

const Q4div = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #e8e8e8;
    display: flex;
    justify-content: center;
    align-items: center;
`

    const Container = styled.div`
        height: 42%;
        width: 57%;
        display: flex;
        justify-content: space-between;
    `

        const Image = styled.div`
            height: 100%;
            width: 38%;
            background-color: #c7c7c7;
            border-radius: 8px;
        `



function Quadrant4() {
  return (
    <Q4div>
        <Container>
            <Image />
            <QuoteContainer />
        </Container>
    </Q4div>
  );
}

export default Quadrant4;

