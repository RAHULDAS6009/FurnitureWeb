import Footer from "../components/index/Footer";
import { Header } from "../components/index/Header";
import Hero from "../components/index/Hero";
import SiderBar from "../components/index/SiderBar";

export default function index() {
  return (
    <div>
      {/* <Loader /> */}
      <SiderBar />
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

function Loader() {
  return (
    <div>
      <div class="preloader" id="preloader">
        <div class="loader"></div>
      </div>
    </div>
  );
}
