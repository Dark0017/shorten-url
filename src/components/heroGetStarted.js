import React from "react";
import styled from "styled-components";
import { WideDesktop, WideMobile } from "./containers";
import BgStarted from "../assets/bg-boost-desktop.svg";
import BgStartedMob from "../assets/bg-boost-mobile.svg";
import Button from "./button";

const OuterCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0rem;
  padding: 0rem;
  height: 17.36vw;
  width: 100vw;
  background-color: #3b3054;
  bottom: -65.5rem;
  left: 0rem;
  font-family: "Poppins", sans-serif;
  background: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #3b3054;
  overflow-x: hidden;
`;

const OuterContMob = styled(OuterCont)`
  margin-top:1rem;
  height: fit-content;
`;

const TitleText = styled.h1`
  margin-top: 3rem;
  text-align: center;
  color: white;
  font-size: 2.5rem;
`;

const TitleTextMob = styled(TitleText)`
  margin: 0rem;
  margin-top: 6rem;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

const BoostButton = styled(Button)`
  border-radius: 2rem;
  width: fit-content;
  padding: 1rem;
  padding-left: 4rem;
  padding-right: 4rem;
  font-size: 1rem;
  font-weight: 700rem;
  cursor: pointer;

  &:active {
    background-color: #47d6d6;
  }
`;

const BoostButtonMob = styled(BoostButton)`
  padding: 0rem;
  margin-top: 0.5rem;
  margin-bottom: 4rem;
  width:10rem;
  height:3rem;
`;

const HeroGetStarted = () => {
  return (
    <div>
      <WideDesktop>
        <OuterCont bg={BgStarted}>
          <TitleText>Boost your links today</TitleText>
          <BoostButton>Get Started</BoostButton>
        </OuterCont>
      </WideDesktop>
      <WideMobile>
        <OuterContMob bg={BgStartedMob}>
          <TitleTextMob>Boost your links today</TitleTextMob>
          <BoostButtonMob>Get Started</BoostButtonMob>
        </OuterContMob>
      </WideMobile>
    </div>
  );
};

export default HeroGetStarted;
