import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlueVerseCaseStudy from './components/BlueVerseCaseStudy';
import EducationAccomplishments from './components/EducationAccomplishments';


function App() {
  return (
    <Router>
      <div className="App" style={{ paddingTop: '70px' }}> {/* Add this style */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blueverse-case-study" element={<BlueVerseCaseStudy />} />
          <Route path="/achievements" element={<EducationAccomplishments />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;