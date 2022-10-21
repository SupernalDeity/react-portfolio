import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import './assets/styles.css';

function renderPage(currentPage) {
  if (currentPage === 'About') {
    return < About />
  }
  if (currentPage === 'Portfolio') {
    return < Portfolio />
  }
  if (currentPage === 'Contact') {
    return < Contact />
  }
  if (currentPage === 'Resume') {
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
              <a onClick={() => setCurrentPage('About')} className="nav-link text-warning text-opacity-75">About</a>
              <a onClick={() => setCurrentPage('Contact')} className="nav-link text-warning text-opacity-75">Contact</a>
              <a onClick={() => setCurrentPage('Portfolio')} className="nav-link text-warning text-opacity-75">Portfolio</a>
              <a onClick={() => setCurrentPage('Resume')} className="nav-link text-warning text-opacity-75">Resume</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
      {renderPage(currentPage)}
    </div>

  )
}

export default App;
