// import aos
import Aos from "aos";
import "aos/dist/aos.css";

import About from "./components/Layout/About";
import Banner from "./components/Layout/Banner";
import Community from "./components/Layout/Community";
import Faq from "./components/Layout/Faq";
import Header from "./components/Layout/Header";
import Join from "./components/Layout/Join";
import Pricing from "./components/Layout/Pricing";
import Workouts from "./components/Layout/Workouts";

function App() {
  Aos.init({
    duration: 2500,
    delay: 400,
  });
  return (
    <div className="mx-auto relative">
      <Header />
      <Banner />
      <About />
      <Workouts />
      <Pricing />
      <Community />
      <Faq />
      <Join />
    </div>
  );
}

export default App;
