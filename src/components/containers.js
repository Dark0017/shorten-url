import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 767 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 766 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

const Content = styled.div`
  margin-left: 7rem;
  margin-right: 7rem;
  display: flex;
  font-family: "Poppins", sans-serif;
`;

const ContentMob = styled(Content)`
  margin-left: 1rem;
  margin-right: 1rem;
`;

export default Default;
export { Desktop, Mobile, Content, ContentMob };
