import {
  About,
  AboutTwo,
  Assortment,
  Clients,
  Information,
  Main,
} from "@/blocks";
import Footer from "@/components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Main />
      <About />
      <Assortment />
      <AboutTwo />
      <Information />
      <Clients />
      <Footer />
    </div>
  );
};

export default Home;
