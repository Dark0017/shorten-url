import styled from "styled-components";
import HeroGetStarted from "./components/heroGetStarted";
import HeroSection from "./components/heroSection";
import InputBox from "./components/inputForm";
import Navbar from "./components/navbar";

const AppDiv = styled.div`
  margin: 0rem;
  padding: 0rem;
  overflow-x: hidden;
`;

function App() {
  return (
    <AppDiv className="App">
      <Navbar />
      <HeroSection />
      <InputBox />
      <HeroGetStarted />
    </AppDiv>
  );
}

export default App;
