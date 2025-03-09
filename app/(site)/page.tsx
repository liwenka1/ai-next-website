import Cta from "./components/cta";
import Faq from "./components/faq";
import Features from "./components/features";
import MainContent from "./components/mian-content";
import Testimonials from "./components/testimonials";

const Site = () => {
  return (
    <>
      {/* <Background /> */}
      <MainContent />
      <Features />
      <Cta />
      <Testimonials />
      <Faq />
    </>
  );
};

export default Site;
