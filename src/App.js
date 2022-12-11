import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/HomeScreen';
import StartScreen from './components/StartScreen';


function App() {
  const user = null

  return (
    <div className="App">
      <Routes>
        {!user ? 
        <Route path="/signin" element={<StartScreen />} /> : 
        <Route path="/" element={<Home />} />}
      </Routes>
    </div>
  );
}

export default App;
