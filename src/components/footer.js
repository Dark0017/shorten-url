import React from "react";
import styled from "styled-components";
import { WideDesktop, WideMobile } from "./containers";
import { ReactComponent as IconFb } from "../assets/icon-facebook.svg";
import { ReactComponent as IconInstagram } from "../assets/icon-instagram.svg";
import { ReactComponent as IconPinterest } from "../assets/icon-pinterest.svg";
import { ReactComponent as IconTwitter } from "../assets/icon-twitter.svg";
const FlexRow = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  margin: 0rem;
  padding: 0rem;
  padding-left: 18rem;
  font-family: "Poppins", sans-serif;
`;

const FlexRowOuter = styled(FlexRow)`
  margin: 0rem;
  padding: 0rem;
  width: 100%;
  background-color: #232127;
  height: 20rem;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const ShortlyTitle = styled.div`
  color: white;
  font-size: 2rem;
  padding-top: 4rem;
  padding-left: 10rem;
`;

const SubTitle = styled.div`
  margin-top: 4rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: white;
`;

const ListText = styled.div`
  color: #bfbfbf;
  cursor: pointer;

  &:active {
    color: #2acfcf;
  }
  &:hover {
    color: #2acfcf;
  }
`;

const IconImage = styled.div`
  cursor: pointer;
  &:hover {
    color: blue;
  }
  &:active {
    color: blue;
  }
`;

const IconRow = styled.div`
  padding-top: 4rem;
  padding-left: 4rem;
  display: flex;
  direction: row;
  justify-content: space-between;
  width: 10rem;
`;

const Footer = () => {
  return (
    <div>
      <WideDesktop>
        <FlexRowOuter>
          <ShortlyTitle>Shortly</ShortlyTitle>
          <FlexRow>
            <FlexCol>
              <SubTitle>Features</SubTitle>
              <ListText>Link Shortening</ListText>
              <ListText>Branded Links</ListText>
              <ListText>Analytics</ListText>
            </FlexCol>
            <FlexCol>
              <SubTitle>Resources</SubTitle>
              <ListText>Blog</ListText>
              <ListText>Developers</ListText>
              <ListText>Support</ListText>
            </FlexCol>
            <FlexCol>
              <SubTitle>Company</SubTitle>
              <ListText>About</ListText>
              <ListText>Our Team</ListText>
              <ListText>Career</ListText>
              <ListText>Contact</ListText>
            </FlexCol>
          </FlexRow>
          <IconRow>
            <IconImage>
              <IconFb />
            </IconImage>
            <IconImage>
              <IconTwitter />
            </IconImage>
            <IconImage>
              <IconPinterest />
            </IconImage>
            <IconImage>
              <IconInstagram />
            </IconImage>
          </IconRow>
        </FlexRowOuter>
      </WideDesktop>
      <WideMobile></WideMobile>
    </div>
  );
};

export default Footer;
