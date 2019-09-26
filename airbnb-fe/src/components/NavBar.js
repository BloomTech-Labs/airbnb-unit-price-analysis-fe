import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../img/Vector.png";

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

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <NavDiv>
      <ProfileImgDiv>
        <img src={Logo} size="45px" />
      </ProfileImgDiv>
      <Links>
        <div>Mission</div>
        <div>How It Works</div>

        {!isAuthenticated && (
          <Button onClick={() => loginWithRedirect({})}>Sign In</Button>
        )}

        {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
      </Links>
      {isAuthenticated && (
        <span>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/profile">Profile</Link>
          <Link to="/external-api">External API</Link>
        </span>
      )}
    </NavDiv>
  );
};

export default NavBar;
