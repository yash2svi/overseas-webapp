import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Program from './pages/Program';
import Upload from './pages/Upload'; 
import Vr from './pages/Vr'
import Navbar from './components/Navbar';
import Environmental from './pages/Environmental'
import Educational from './pages/Educational'
import Oceancleanup from './pages/Oceancleanup';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <BrowserRouter>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/program' element={<Program />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/Vr' element={<Vr />} />
            <Route path='/Environmental' element={<Environmental />} />
            <Route path='/Educational' element={<Educational />} />
            <Route path='/Oceancleanup' element={<Oceancleanup/>} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
