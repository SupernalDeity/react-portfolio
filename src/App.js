import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import About from './pages/about'

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  
  if (currentPage === 'about') {
    < About />
  }
  if (currentPage === 'portfolio') {
    < Portfolio />
  }
  if (currentPage === 'contact') {
    < Contact />
  }
  if (currentPage === 'resume') {
    < Resume />
  }
}

export default App;
