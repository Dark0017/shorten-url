import React from "react";
import styled from "styled-components";
import { Desktop, Mobile } from "./containers";
import BrandIco from "../assets/icon-brand-recognition.svg";
import DetailedIco from "../assets/icon-detailed-records.svg";
import FullyIco from "../assets/icon-fully-customizable.svg";
const FlexCol = styled.div`
  width: 94.5%;
  margin-left: 1.5rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const FlexColMob = styled(FlexCol)`
  position: relative;
  margin: 0rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
`;

const FlexRow = styled(FlexCol)`
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5rem; ;
`;

const HeroTitle = styled.div`
  text-align: center;
  color: #232127;
`;
const HeroSubHeading = styled.div`
  text-align: center;
  color: #bfbfbf;
`;

const IconImage = styled.div`
  width: 3rem;
  height: 3rem;
  background: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: auto;
  background-color: #3b3054;
  background-position: center;
  border-radius: 50%;
  padding: 1rem;
  position: absolute;
  top: -2.5rem;
`;

const IconImageMob = styled(IconImage)`
  left: 7rem;
`;

const HeroCardLeft = styled.div`
  position: relative;
  background-color: white;
  padding: 1.75rem;
  padding-top: 5rem;
  width: 30%;
  height: 8rem;
  margin: 1rem;
  border-radius: 0.3rem;
`;

const HeroCardCenter = styled(HeroCardLeft)`
  margin-top: 4rem;
`;

const HeroCardRight = styled(HeroCardLeft)`
  margin-top: 8rem;
`;

const HeroCardMob = styled(HeroCardLeft)`
  margin: 0rem;
  margin-top: 5rem;
  width: 100%;
  height: auto;
  padding: 0rem;
  padding-bottom: 2.5rem;
`;

const CardTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: #232127;
  text-align: center;
`;

const CardTitleMob = styled(CardTitle)`
  margin: 0.5rem;
  margin-top: 4.5rem;
`;

const CardBody = styled.div`
  color: #bfbfbf;
  font-size: 0.9rem;
  text-align: center;
`;

const CardBodyMob = styled(CardBody)``;

const CardBgLine = styled.hr`
  position: absolute;
  z-index: -1;
  top: 10rem;
  left: 3rem;
  height: 0.5rem;
  width: 80%;
  background-color: #2acfcf;
  color: transparent;
`;

const CardBgLineMob = styled(CardBgLine)`
  z-index: -1;
  left: 9.2rem;
  height: 80%;
  width: 0.5rem;
`;

const StatsHeroSection = () => {
  return (
    <div>
      <Desktop>
        <FlexCol>
          <div>
            <HeroTitle>
              <h1>Advanced Statistics </h1>
            </HeroTitle>
            <HeroSubHeading>
              Track how your links are performing across the web with
            </HeroSubHeading>
            <HeroSubHeading>our advanced statistics dashboard</HeroSubHeading>
          </div>
          <FlexRow>
            <HeroCardLeft>
              <IconImage bg={BrandIco} />
              <CardTitle>Brand Recognition</CardTitle>
              <CardBody>Boost your brand recognition with</CardBody>
              <CardBody>each click. Generic links don't mean a</CardBody>
              <CardBody>thing. Branded links help instil</CardBody>
              <CardBody>confidence in your content</CardBody>
            </HeroCardLeft>
            <HeroCardCenter>
              <IconImage bg={DetailedIco} />
              <CardTitle>Detailed Records</CardTitle>
              <CardBody>Gain insights into who is clickng your</CardBody>
              <CardBody>links. Knowing when and where</CardBody>
              <CardBody>people engage with your content</CardBody>
              <CardBody>helps inform better decisions.</CardBody>
            </HeroCardCenter>
            <HeroCardRight>
              <IconImage bg={FullyIco} />
              <CardTitle>Fully Customizable</CardTitle>
              <CardBody>Improve brand awareness and</CardBody>
              <CardBody>content discoverability through</CardBody>
              <CardBody>customizable links, supercharging</CardBody>
              <CardBody>audience engagement.</CardBody>
            </HeroCardRight>
            <CardBgLine />
          </FlexRow>
        </FlexCol>
      </Desktop>
      <Mobile>
        <FlexColMob>
          <div>
            <HeroTitle>
              <h1>Advanced Statistics </h1>
            </HeroTitle>
            <HeroSubHeading>
              Track how your links are performing across the web with our
              advanced
            </HeroSubHeading>
            <HeroSubHeading> statistics dashboard</HeroSubHeading>
          </div>
          <FlexColMob>
            <HeroCardMob>
              <IconImageMob bg={BrandIco} />
              <CardTitleMob>Brand Recognition</CardTitleMob>
              <CardBodyMob>Boost your brand recognition with</CardBodyMob>
              <CardBodyMob>each click. Generic links don't</CardBodyMob>
              <CardBodyMob>mean a thing. Branded links help </CardBodyMob>
              <CardBodyMob>instil confidence in your content</CardBodyMob>
            </HeroCardMob>
            <HeroCardMob>
              <IconImageMob bg={DetailedIco} />
              <CardTitleMob>Detailed Records</CardTitleMob>
              <CardBodyMob>Gain insights into who is clickng</CardBodyMob>
              <CardBodyMob>your links. Knowing when and</CardBodyMob>
              <CardBodyMob>where people engage with your</CardBodyMob>
              <CardBodyMob>content helps inform better</CardBodyMob>
              <CardBodyMob>decisions</CardBodyMob>
            </HeroCardMob>
            <HeroCardMob>
              <IconImageMob bg={FullyIco} />
              <CardTitleMob>Fully Customizable</CardTitleMob>
              <CardBodyMob>Improve brand awareness and</CardBodyMob>
              <CardBodyMob>content discoverability through</CardBodyMob>
              <CardBodyMob>customizable links, supercharging</CardBodyMob>
              <CardBodyMob>audience engagement.</CardBodyMob>
            </HeroCardMob>
            <CardBgLineMob />
          </FlexColMob>
        </FlexColMob>
      </Mobile>
    </div>
  );
};

export default StatsHeroSection;
