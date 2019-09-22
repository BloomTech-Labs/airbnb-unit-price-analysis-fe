import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    width: 50%;
    height: 42%;
    position: relative;
    bottom: 40px;
    left: 50px;
    display: flex;
    flex-direction: column;
    color: white;
`

const H1 = styled.h1`
    font-family: 'Varela Round', sans-serif;
    font-size: 40px;
    line-height: 1.4;
`

const Text = styled.div`
    font-family: 'Varela Round', sans-serif;
    font-size: 35px;
    line-height: 1;
`

const ButtonDiv = styled.div`
    width: 50%;
    height: 20%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`

const Button = styled.button`
    background: none;
    border-radius: 5px;
    color: white;
	border: solid white 3px;
	font-family: 'Varela Round', sans-serif;
	font-size: 18px;
    line-height: 1.4;
    width: 45%;
    height: 100%;
`

const Button2 = styled(Button)`
    background-color: white;
    color: grey;
    font-weight: bold;
`

function Header() {
  return (
    <Container>
        <H1>We value what you value</H1>
        <Text>Stop undervaluing your rentals and start making the profit you deserve</Text>
        <ButtonDiv>
            <Button2>Join now</Button2>
            <Button>Demo</Button>

        </ButtonDiv>

    </Container>
  );
}

export default Header;