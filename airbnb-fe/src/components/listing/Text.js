import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 54%;
    height: 100%;
`

const WidthLimiter = styled.div`
    margin: auto;
    width: 95%;
`

const H1 = styled.h1`
    margin: 0px;
    font-size: 31px;
    line-height: 1;
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
            {/* <WidthLimiter> */}

                <H1>Miami Beach 8 guests 3 Bedroom Apartment (20)</H1>
                <Location>Miami Beach</Location>

                <Feature>Entired serviced apartment</Feature>
                <Detail>8 guests  3 bedrooms  4beds  2baths</Detail>
            {/* </WidthLimiter>      */}
        </Container>
    );
}

export default Text;