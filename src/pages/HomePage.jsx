import Header from "../components/Layout/Header";
import Banner from "../components/Layout/Banner";
import About from "../components/Layout/About";
import Workouts from "../components/Layout/Workouts";
import Pricing from "../components/Layout/Pricing";
import Community from "../components/Layout/Community";
import Faq from "../components/Layout/Faq";
import Footer from "../components/Layout/Footer";

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
      <Footer />
    </div>
  );
}

export default HomePage;
