import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import Donate from './pages/Donate';
import Ideas from './pages/Ideas';
function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/our_work" element={<OurWork />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/ideas" element={<Ideas />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
