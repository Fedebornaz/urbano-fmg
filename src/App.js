import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Objectives from "./components/Objectives";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FadeInOnViewportEnter from "./utlilities/FadeInOnViewportEnter";

function App() {
  return (
    <FadeInOnViewportEnter>
      <Navbar />
      <Home />
      <AboutUs />
      <Objectives />
      <Contact />
      <Footer />
    </FadeInOnViewportEnter>
  );
}

export default App;
