import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Logo from "../img/Vector.png";

import PrivateRoute from "./PrivateRoute";
import ScrollableAnchor, { goToAnchor } from "react-scrollable-anchor";
import device from "../devices";

// import PrivateRoute from './PrivateRoute';
import { connect } from 'react-redux';
import { setSearchMode } from '../store/actions';




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

  &:hover {
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    cursor: pointer;
  }
`;

const AnchorLink = styled.div`
  text-decoration: none;
  color: black;
  line-height: 2.4rem;

  &:hover {
    cursor: pointer;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const SignUpButton = styled.button`
  background: #ffffff;
  border: 2px solid #00a699;
  border-radius: 4px;
  height: 35px;
  margin: 0;
  width: 90px;
  font-size: 16px;
  color: #00a699;

  &:hover {
    cursor: pointer;
  }
`;

const NavBar = props => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();


  const redirectToMediator = () => {
    props.history.push("/mediator")
  }


  const goToSearch = (e) => {
    e.preventDefault();
    props.history.push('/search')
    props.setSearchMode(true)
  }


  return (
    <NavDiv>
      <ProfileImgDiv>
        <Link to="/">
          <img src={Logo} size="45px" />
        </Link>
      </ProfileImgDiv>
      <Links>
        <AnchorLink onClick={() => goToAnchor("mission")}>Mission</AnchorLink>

        <AnchorLink onClick={() => goToAnchor("howitworks")}>
          How It Works
        </AnchorLink>

        {/* Redirects page to URL path if rendered-page doesn't correspond to that path */}
        {window.location.pathname !== props.location.pathname &&
          props.history.push(`${window.location.pathname}`)}

        {!isAuthenticated && (
          // <Button onClick={() => loginWithRedirect({})}>Sign In</Button> //<- Original Auth0 Login Button
          <SignUpButton onClick={() => redirectToMediator()}>Sign In</SignUpButton>

        )}

        {isAuthenticated && (
          <div>
            <StyledLink to="/dashboard">Dashboard</StyledLink>
            <Button onClick={(e) => goToSearch(e)}>Search</Button>
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


const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        listings: state.listings,
        error: state.error
    }
}

export default connect(mapStateToProps, { setSearchMode })(withRouter(NavBar));
