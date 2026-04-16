import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import Donate from './pages/Donate';
import Ideas from './pages/Ideas';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Essay from './pages/Essay';
import ContactPage from './pages/ContactUs';
import PressMedia from './pages/PressMedia';
import CareerPage from './pages/Career';

function App() {

  return (
    <BrowserRouter>
      <Header />
      {/* Added pt-[88px] to offset the fixed header */}
      <div className="pt-[88px] min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/our_work" element={<OurWork />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/essay" element={<Essay />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/press-media" element={<PressMedia />} />
          <Route path="/career" element={<CareerPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App

