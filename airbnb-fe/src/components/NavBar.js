import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { useAuth0 } from "../react-auth0-wrapper";

const NavDiv = styled.div`
	width: 100vw;
	height: 10vh;
	position: fixed;
	background-color: #bdbdbd;
	top: 0px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 3
`

const ProfileImgDiv = styled.div`
	border-radius: 50px;
	background-color: white;
	height: 55px;
	width: 55px;
	position: relative;
	left: 40px;
`

const Links = styled.div`
	width: 40vw;
	display: flex;
	justify-content: space-around;
`

const NavBar = () => {
	const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

	return (
		<NavDiv>
			<ProfileImgDiv/>
			<Links>
				<div>Mission</div>
				<div>How It Works</div>

				{!isAuthenticated && (
					<button onClick={() => loginWithRedirect({})}>Log in</button>
				)}

				{isAuthenticated && <button onClick={() => logout()}>Log out</button>}
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
