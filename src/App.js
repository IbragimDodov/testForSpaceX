import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import mainbg from '../src/assets/img/main-bg.jpg'

import './App.css';

function App() {
  return (
    <div className="App">
      <img className='main-bg' src={mainbg} alt="bg" />
      <div className="container">
        <Header/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
