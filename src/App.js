import './App.css';
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar />
            <Home />
            <Services />
        <Footer />
    </div>
  );
}

export default App;
