import "./App.css";
import About from "./Components/AboutComponent/About";
import Discover from "./Components/DiscoverComponent/Discover";
import Exclusive from "./Components/ExclusiveComponent/Exclusive";
import Explore from "./Components/ExploreSectionComponent/Explore";
import Footer from "./Components/FooterComponent/Footer";
import Home from "./Components/HomeComponent/Home";
import Navbar from "./Components/NavbarComponent/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Exclusive />
      <Explore/>
      <Discover/>
      <Footer/>
    </div>
  );
}

export default App;
