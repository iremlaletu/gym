import Header from "../components/Layout/Header";
import Banner from "../components/Layout/Banner";
import About from "../components/Layout/About";
import Workouts from "../components/Layout/Workouts";
import Pricing from "../components/Layout/Pricing";
import Community from "../components/Layout/Community";
import Faq from "../components/Layout/Faq";
import Join from "../components/Layout/Join";

function HomePage() {
  return (
    <div className="overflow-hidden relative">
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

export default HomePage;
