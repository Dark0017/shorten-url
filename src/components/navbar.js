import React, { useState } from "react";
import { Desktop, Mobile } from "./containers";
import Button from "./button";
import styled from "styled-components";
import { BiMenu } from "react-icons/bi";

const NavItemLeft = styled.span`
  margin: 1rem;
  margin-left: 0rem;
  padding-left: 0rem;
  margin-right: auto;
`;

const NavItemLeftMob = styled(NavItemLeft)`
  margin-left: 0rem;
`;

const NavItemRight = styled.span`
  margin: 1rem;
  margin-left: auto;
`;

const NavItemRightMob = styled(NavItemRight)`
  margin-right: 0rem;
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
  margin: 1rem;
  margin-left: 0rem;
  font-size: 2rem;
  font-weight: 700;
  color: #232127;
  cursor: pointer;
`;

const SignUpBtn = styled(Button)`
  margin: 1rem;
  cursor: pointer;
  &:active {
    background-color: #47d6d6;
  }
`;

const NavLogoMob = styled(NavLogo)`
  font-size: 2rem;
  margin: 0rem;
`;

const MenuIcon = styled(BiMenu)`
  margin-top: 0rem;
  padding: 0rem;
  font-size: 2rem;
  color: #bfbfbf;
`;

const MobileNav = styled.div`
  display: ${(props) => (props.showNav ? `flex` : `none`)};
  flex-direction: column;
  position: fixed;
  top: 5rem;
  left: 1.5rem;
  right: 1.5rem;
  background-color: #3b3054;
  border-radius: 1rem;
`;

const MobNavLink = styled(NavLink)`
  & {
    color: white;
    align-self: center;
    margin-top: 2rem;

    &:hover {
      color: white;
    }

    &:active {
      color: #2acfcf;
    }
  }
`;

const Hr = styled.hr`
  width: 80%;
  height: 1px;
  border-width: 0rem;
  background-color: #9e9aa7;
`;
const MobSignUpBtn = styled(SignUpBtn)`
  margin-bottom: 2rem;
`;

const MenuBtnMob = styled.button`
  margin: 0rem;
  padding: 0rem;
  margin-top: 0.75rem;
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  border: none;
`;

const Navbar = () => {
  const [showNav, setNav] = useState(false);
  return (
    <div>
      <Desktop>
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
      </Desktop>
      <Mobile>
        <NavItemLeftMob>
          <NavLogoMob>Shortly</NavLogoMob>
        </NavItemLeftMob>
        <NavItemRightMob>
          <MenuBtnMob onClick={() => setNav(!showNav)}>
            <MenuIcon />
          </MenuBtnMob>
        </NavItemRightMob>
        <MobileNav showNav={showNav}>
          <MobNavLink>Features</MobNavLink>
          <MobNavLink>Pricing</MobNavLink>
          <MobNavLink>Resources</MobNavLink>
          <Hr />
          <MobNavLink>Login</MobNavLink>
          <MobSignUpBtn>Sign Up</MobSignUpBtn>
        </MobileNav>
      </Mobile>
    </div>
  );
};

export default Navbar;
