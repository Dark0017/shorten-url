import HeroSection from "./components/heroSection";
import InputBox from "./components/inputForm";
import Navbar from "./components/navbar";
import UrlList from "./components/urlList";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <InputBox />
      <UrlList />
    </div>
  );
}

export default App;
