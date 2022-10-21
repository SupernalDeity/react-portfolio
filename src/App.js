import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Nav from './components/Nav';

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
      < Nav />
      {renderPage(currentPage)}
    </div>

  )
}

export default App;
