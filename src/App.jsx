//import { useState } from 'react'
import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div id="page-container">
          <Nav />
            <Outlet />
          <Footer />
    </div>
  )
}

export default App