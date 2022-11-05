import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useState, useEffect } from 'react'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import './assets/styles.css';
import Footer from './components/Footer';

let aboutOpacity = 'text-opacity-50';
let portfolioOpacity = 'text-opacity-50';
let contactOpacity = 'text-opacity-50';
let resumeOpacity = 'text-opacity-50';

function renderPage(currentPage) {
  if (currentPage === 'About') {
    aboutOpacity = 'text-opacity-100';
    portfolioOpacity = 'text-opacity-50';
    contactOpacity = 'text-opacity-50';
    resumeOpacity = 'text-opacity-50';
    return < About />
  }
  if (currentPage === 'Portfolio') {
    aboutOpacity = 'text-opacity-50';
    portfolioOpacity = 'text-opacity-100';
    contactOpacity = 'text-opacity-50';
    resumeOpacity = 'text-opacity-50';
    return < Portfolio />
  }
  if (currentPage === 'Contact') {
    aboutOpacity = 'text-opacity-50';
    portfolioOpacity = 'text-opacity-50';
    contactOpacity = 'text-opacity-100';
    resumeOpacity = 'text-opacity-50';
    return < Contact />
  }
  if (currentPage === 'Resume') {
    aboutOpacity = 'text-opacity-50';
    portfolioOpacity = 'text-opacity-50';
    contactOpacity = 'text-opacity-50';
    resumeOpacity = 'text-opacity-100';
    return < Resume />
  }
};

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  return (
    <div>
      <div className="container-fluid bg-dark">
        <div className="d-flex justify-content-center">
          <h1 className="text-info m-2">Anthony's Portfolio</h1>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="d-flex justify-content-center collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ">
                <a onClick={() => setCurrentPage('About')} className={`nav-link text-warning ${aboutOpacity}`}>About</a>
                <a onClick={() => setCurrentPage('Portfolio')} className={`nav-link text-warning ${portfolioOpacity}`}>Portfolio</a>
                <a onClick={() => setCurrentPage('Contact')} className={`nav-link text-warning ${contactOpacity}`}>Contact</a>
                <a onClick={() => setCurrentPage('Resume')} className={`nav-link text-warning ${resumeOpacity}`}>Resume</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {renderPage(currentPage)}
      <Footer></Footer>
    </div>
  )
}

export default App;
