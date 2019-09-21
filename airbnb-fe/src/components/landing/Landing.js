import React from "react";
import styled from 'styled-components';
import Quadrant1 from './Quadrant1';
import Quadrant2 from './Quadrant2';
import Quadrant3 from './Quadrant3';
import Quadrant4 from './Quadrant4';

import { useAuth0 } from "../../react-auth0-wrapper";

const LandingContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const QuadrantLimiter = styled.div`
    height: 100%;
    width: 80%;
`


function Landing() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <LandingContainerDiv>
        <Quadrant1 />
        <Quadrant2 />
        <Quadrant3 />
        <Quadrant4 />
    </LandingContainerDiv>
  );
}

export default Landing;