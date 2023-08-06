import './App.css';
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Part4 from "./components/Part4/Part4";
import Part5 from "./components/Part5/Part5";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <Services />
        <Part4 />
        <Part5 />
        <Footer />
    </div>
  );
}

export default App;
