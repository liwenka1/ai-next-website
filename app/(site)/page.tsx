import CreationShowcase from "./components/creation-showcase";
import Faq from "./components/faq";
import Features from "./components/features";
import Hero from "./components/hero";
import MainContent from "./components/mian-content";
import Sponsor from "./components/sponsor";
import Testimonials from "./components/testimonials";

const Site = () => {
  return (
    <>
      <Hero />
      <MainContent />
      <CreationShowcase />
      <Features />
      <Testimonials />
      <Faq />
      <Sponsor />
    </>
  );
};

export default Site;
