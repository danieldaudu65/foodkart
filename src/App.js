import "./App.css";
import {
  Contact,
  Everyone,
  FAGs,
  Footer,
  GetFoodAppSlide,
  Home,
  PlaceOrder,
  Testimonial,
  WhyEat,
  Works,
  WhoWeAre,
} from "./slides";

function App() {
  return (
    <div className="">
      <Home />
      <WhoWeAre />
      <WhyEat />
      <Works />
      <PlaceOrder />
      <Testimonial />
      <FAGs />
      <GetFoodAppSlide />
      <Contact />
      <Footer />

      {/* <PlaceOrder /> */}
    </div>
  );
}

export default App;
