import React from "react";
import { Desktop, Mobile } from "./containers";
import Button from "./button";
import styled from "styled-components";

const FlexBox = styled.div`
  width: 100%;
  display: flex;
  font-family: "Poppins", sans-serif;
`;

const NavItemLeft = styled.span`
  margin: 1rem;
  margin-right: auto;
`;

const NavItemRight = styled.span`
  margin: 1rem;
  margin-left: auto;
`;

const NavLink = styled.a`
  font-weight: 500;
  color: #9e9aa7;
  margin: 1rem;

  &:hover {
    color: #232127;
    cursor: pointer;
  }

  &:active {
    color: #232127;
    cursor: pointer;
  }
`;
const NavLogo = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem;
  color: #232127;
  cursor: pointer;
`;

const SignUpBtn = styled(Button)`
  margin: 1rem;
`;

const NavLogoMob = styled(NavLogo)`
  font-size: 2rem;
  margin: 0rem;
`;

const Navbar = () => {
  return (
    <div>
      <Desktop>
        <FlexBox>
          <NavItemLeft>
            <NavLogo>Shortly</NavLogo>
            <NavLink>Features</NavLink>
            <NavLink>Pricing</NavLink>
            <NavLink>Resources</NavLink>
          </NavItemLeft>
          <NavItemRight>
            <NavLink>Login</NavLink>
            <SignUpBtn>Sign Up</SignUpBtn>
          </NavItemRight>
        </FlexBox>
      </Desktop>
      <Mobile>
        <FlexBox>
          <NavItemLeft>
            <NavLogoMob>Shortly</NavLogoMob>
          </NavItemLeft>
          <NavItemRight></NavItemRight>
        </FlexBox>
      </Mobile>
    </div>
  );
};

export default Navbar;
