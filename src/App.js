import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Objectives from "./components/Objectives";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Home />
      <AboutUs />
      <Objectives />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
