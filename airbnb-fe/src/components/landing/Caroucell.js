import React, { useState } from 'react';
import styled from 'styled-components';

import Card from './Card';
import theGang from './GangGang';

const Button = styled.i`
    padding: 20px;
    align-self: center;
    font-size: 2rem;
    cursor: pointer;
`;

const CaroucellContainer = styled.div`
    height: 55%;
    width: 80%;
    margin: 0;
    display: flex;
    position: absolute;
`;

const Caroucell = () => {
    const [wholeGang, setWholeGang] = useState(theGang);
    const [gangster, setGangster] = useState(wholeGang[0]);

    const nextGangster = () => {
        let newIndex = gangster.index+1;

        if(newIndex < wholeGang.length) {
            setGangster(wholeGang[newIndex]);
        } else {
            newIndex = 0;
            setGangster(wholeGang[newIndex]);
        }
    };

    const previousGangster = () => {
        let newIndex = gangster.index-1;

        if(newIndex >= 0) {
            setGangster(wholeGang[newIndex]);
        } else {
            newIndex = wholeGang.length-1;
            setGangster(wholeGang[newIndex]);
        }
    };

    return (
        <CaroucellContainer>
            <Button className="fas fa-chevron-left" onClick={() => nextGangster()}></Button>
            <Card gangster={gangster} />
            <Button className="fas fa-chevron-right" onClick={() => previousGangster()}></Button>
        </CaroucellContainer>
    )
};

export default Caroucell;

