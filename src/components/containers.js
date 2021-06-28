import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const Content = styled.div`
  margin-left: 7rem;
  margin-right: 7rem;
  display: flex;
  font-family: "Poppins", sans-serif;
  z-index: 1;
`;

const ContentMob = styled(Content)`
  margin-left: 1rem;
  margin-right: 1rem;
`;

const GrayContainer = styled.div`
  background-color: #eff1f7;
  position: absolute;
  margin-top: 0rem;
  width: 100vw;
  height: 100%;
  z-index: -1;
  top: -5rem;
  left: -1rem;
  padding-top: 7rem;
  font-family: "Poppins", sans-serif;
`;

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 767 });
  return isDesktop ? <Content>{children}</Content> : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 766 });
  return isMobile ? <ContentMob>{children}</ContentMob> : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

const WideDesktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 767 });
  return isDesktop ? children : null;
};

const WideMobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 766 });
  return isMobile ? children : null;
};

export default Default;
export { Desktop, Mobile, WideDesktop, WideMobile, GrayContainer };
