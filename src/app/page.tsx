import Advantages from "@/components/layouts/Advantages";
import Hero from "@/components/layouts/Hero";
import OrderSteps from "@/components/layouts/OrderSteps";
import Products from "@/components/layouts/Products";
import Testimonials from "@/components/layouts/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <Testimonials />
      <Advantages />
      <OrderSteps />
    </>
  );
};
export default Home;
