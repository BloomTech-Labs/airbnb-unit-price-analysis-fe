import React from 'react';
import styled from 'styled-components';

import Text from './Text';


const S = {}



S.Container = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 59%; //was 100
    box-sizing: border-box;
    border-radius: 6px;
    justify-content: space-between;
`

S.ImageDiv = styled.div`
    width: 44%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`

S.Image = styled.div`
    width: 100%;
    height: 90%;
    background-color: #cfcfcf;
`




function ResultBox(){
    return(
        <S.Container>
            <S.ImageDiv>
                <S.Image />
            </S.ImageDiv>
            <Text />
        </S.Container>
    );
}

export default ResultBox;