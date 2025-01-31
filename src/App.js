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
} from "./slides";

function App() {
  return (
    <div className="">
      <Home />
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
