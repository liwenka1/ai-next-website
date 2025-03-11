import Faq from "./components/faq";
import Features from "./components/features";
import Hero from "./components/hero";
import MainContent from "./components/mian-content";
import Testimonials from "./components/testimonials";

const Site = () => {
  return (
    <>
      <Hero />
      <MainContent />
      <Features />
      <Testimonials />
      <Faq />
    </>
  );
};

export default Site;
