import Hero from "./Hero";
import PricingPlans from "./Pricing";
import Testimonials from "./Testimonals";
import WhyChooseUs from "./Whychose";

const Home = () => {
  return (
    <div className=" min-h-screen ">
      <Hero />
      <WhyChooseUs />
      <PricingPlans />
      <Testimonials />
    </div>
  );
};

export default Home;
