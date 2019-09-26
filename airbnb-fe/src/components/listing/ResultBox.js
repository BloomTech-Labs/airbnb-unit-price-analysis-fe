import React from 'react';
import styled from 'styled-components';

import Text from './Text';


const S = {}

S.Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 85%;
    box-sizing: border-box;
    padding-top: 30px;
    background-color: #f0f0f0;
    border-radius: 6px;
    box-shadow: 0 8px 8px -5px gray;
    width: 60%;
`

S.Result = styled.div`
    display: flex;
    align-items: center;
    height: 85%;
    width: 100%;
    box-sizing: border-box;

`

S.ImageDiv = styled.div`
    width: 40%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`

S.Image = styled.div`
    width: 75%;
    height: 80%;
    background-color: #cfcfcf;
`




function ResultBox(){
    return(
        <S.Container>
            <S.Result>
                <S.ImageDiv>
                    <S.Image />
                </S.ImageDiv>
                <Text />
            </S.Result>
        </S.Container>
    );
}

export default ResultBox;