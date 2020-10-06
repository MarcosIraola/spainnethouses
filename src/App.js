import React from 'react';
import './App.css';
import Footer from './components/footer/footer.view';
import ListHouse from './components/listHouse/listHouse.view';
import NavBar from './components/navbar/navbar.view';
import Landing from './pages/landing/landing.view';

function App() {
  return (
    <div>
      <NavBar/>
      <Landing/>
      <Footer/> 
    </div>
  );
}

export default App;
