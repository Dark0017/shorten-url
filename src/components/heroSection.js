import React from "react";
import styled from "styled-components";
import { Desktop, Mobile, Content, ContentMob } from "./containers";
import Button from "./button";
import { ReactComponent as WorkingImg } from "../assets/working.svg";

const FlexBox = styled.div`
  width: 100%;
  display: flex;
  font-family: "Poppins", sans-serif;
`;

const FlexBoxMob = styled(FlexBox)`
  flex-direction: column;
`;

const HeadText = styled.h1`
  color: #232127;
  font-weight: 700;
  font-size: 5rem;
  line-height: 2rem;
`;

const HeadTextMob = styled(HeadText)`
  margin: 0rem;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-align: center;
  line-height: 1rem; ;
`;

const SubText = styled.p`
  color: #bfbfbf;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1rem;
`;

const SubTextMob = styled(SubText)`
  text-align: center;
  margin: 0rem;
  margin-bottom: 1rem;
  width: 100%;
  font-size: 1rem;
  line-height: 0.5rem;
`;

const TextSec = styled.div`
  margin-top: 6.1rem;
  flex-shrink: 0rem;
  width: 40rem;
`;

const TextSecMob = styled(TextSec)`
  display: flex;
  flex-direction: column;
  row-gap: 0rem;
  margin: 0rem;
  margin-top: 3rem;
  width: 100%;
`;

const HeroButton = styled(Button)`
  margin: 1rem;
  font-size: 1.1rem;
  cursor: pointer;

  &:active {
    background-color: #47d6d6;
  }
`;

const HeroButtonMob = styled(HeroButton)`
  margin: 0rem;
  width: 11rem;
  font-weight: 700;
  align-self: center;
`;

const HeroImg = styled(WorkingImg)`
  overflow: visible;
  margin-left: 6rem;
  margin-top: 2rem;
`;

const HeroImgMob = styled(HeroImg)`
  display: block;
  margin: 0rem;
  height: 20rem;
  width: 100%;
  overflow: visible;
`;

const HeroSection = () => {
  return (
    <div>
      <Desktop>
        <Content>
          <FlexBox>
            <TextSec>
              <HeadText>More than just</HeadText>
              <HeadText>shorter links</HeadText>
              <SubText>Build your brand's recognition and get detailed</SubText>
              <SubText>insights on how your links are performing</SubText>
              <HeroButton>Get Started</HeroButton>
            </TextSec>
          </FlexBox>
          <HeroImg />
        </Content>
      </Desktop>
      <Mobile>
        <ContentMob>
          <FlexBoxMob>
            <HeroImgMob viewBox="0, 0, 480, 480 " />
            <TextSecMob>
              <HeadTextMob>More than just</HeadTextMob>
              <HeadTextMob>shorter links</HeadTextMob>
              <SubTextMob>Build your brand's recognition and</SubTextMob>
              <SubTextMob> get detailed insights on how your</SubTextMob>
              <SubTextMob>links are performing</SubTextMob>
              <HeroButtonMob>Get Started</HeroButtonMob>
            </TextSecMob>
          </FlexBoxMob>
        </ContentMob>
      </Mobile>
    </div>
  );
};

export default HeroSection;
