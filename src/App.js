import React from 'react';
import './App.css';
import Footer from './components/footer/footer.view';
import ListHouse from './components/listHouse/listHouse.view';
import NavBar from './components/navbar/navbar.view';
import Landing from './pages/landing/landing.view';
import Header from './components/header/header';

function App() {
  return (
    <div>
      <NavBar/>
      <Header />
      <Landing/>
      <Footer/> 
    </div>
  );
}

export default App;
