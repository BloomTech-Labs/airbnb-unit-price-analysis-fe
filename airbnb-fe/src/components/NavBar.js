import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Logo from "../img/Vector.png";
import PrivateRoute from './PrivateRoute';

import { useAuth0 } from "../react-auth0-wrapper";

const NavDiv = styled.div`
  width: 100vw;
  height: 9vh;
  position: fixed;
  background-color: white;
  top: 0px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

const ProfileImgDiv = styled.div`
  border-radius: 50px;
  background-color: white;
  height: 50px;
  width: 50px;
  position: relative;
  left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Links = styled.div`
  width: 40vw;
  display: flex;
  justify-content: space-around;
  font-family: "Varela Round", sans-serif;
  font-size: 18px;
  line-height: 1.4;
  color: #484848;
`;

const Button = styled.button`
  background: none;
  border: none;
  font-family: "Varela Round", sans-serif;
  font-size: 18px;
  line-height: 1.4;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;


const NavBar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const redirectToDash = () => {
    props.history.push("/dashboard")
  }

  return (
    <NavDiv>
      <ProfileImgDiv>
        <img src={Logo} size="45px" />
      </ProfileImgDiv>
      <Links>
        <div>Mission</div>
        <div>How It Works</div>


      
{/* Redirects page to URL path if rendered-page doesn't correspond to that path */}
        {window.location.pathname !== props.location.pathname 
          && props.history.push(`${window.location.pathname}`)
        }

        {!isAuthenticated && (
          // <Button onClick={() => loginWithRedirect({})}>Sign In</Button> //<- Original Auth0 Login Button
          <Button onClick={() => redirectToDash()}>Sign In</Button>
        )}


        {isAuthenticated && (
          <div>
            <StyledLink to="/dashboard">Dashboard</StyledLink>
            <Button onClick={() => logout()}>Log out</Button>
          </div>
        )}
      </Links>
      {isAuthenticated && (
        <span>
          <StyledLink to="/">Home</StyledLink>&nbsp;
          <StyledLink to="/profile">Profile</StyledLink>
          <StyledLink to="/external-api">External API</StyledLink>

        </span>
      )}
    </NavDiv>
  );
};

export default withRouter(NavBar);
