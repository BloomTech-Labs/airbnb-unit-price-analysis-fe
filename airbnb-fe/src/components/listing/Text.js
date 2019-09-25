import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 60%;
    height: 100%;
`

const H1 = styled.h1`
    margin: 0px;
    margin-top: 15px;
`
const Location = styled.div`
    margin: 0px;
    font-size: 25px;
`

const Feature = styled.div`
    margin: 18px 0px 0px;
    font-size: 20px;
    font-weight: 600;
`

const Detail = styled.div`
    margin: 0px;
    font-size: 18px;
`

function Text(){
    return(
        <Container>

            <H1>Miami Beach 8 guests 3 Bedroom Apartment (20)</H1>
            <Location>Miami Beach</Location>

            <Feature>Entired serviced apartment</Feature>
            <Detail>8 guests  3 bedrooms  4beds  2baths</Detail>
                 
        </Container>
    );
}

export default Text;