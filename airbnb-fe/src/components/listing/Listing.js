import React from "react";
import styled from 'styled-components';

import ResultBox from './ResultBox';

const S = {}

S.Container = styled.div`
    width: 92%;
    margin: auto;
    margin-top: 10vh;
    background-color: purple;
    height: 90vh;
    display: flex;
    flex-direction: column;
`

S.Top = styled.div`
    display: flex;  
    height: 40%;
`

S.Bottom = styled.div`
    display: flex;
`

function Listing() {
  return (
    <S.Container>
        <S.Top>
            <ResultBox />
        </S.Top>
        <S.Bottom>

        </S.Bottom>
    </S.Container>
  );
}

export default Listing;