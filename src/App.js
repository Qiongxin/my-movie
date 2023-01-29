import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/HomeScreen/HomeScreen';
import StartScreen from './components/StartScreen';
import ProfileScreen from './components/ProfileScreen';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';


function App() {
  const dispatch = useDispatch()
  const getUser = useSelector(selectUser)

  useEffect(() => {
    const change = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          id: user.uid,
          email: user.email
        }))
      } else {
        dispatch(logout())
      }
    });
  
    return change
  }, [dispatch])

  return (
    <div className="App">
      <Routes>
        {!getUser ? 
        <Route path="/" element={<StartScreen />} /> : 
        <Route path="/" element={<Home />} />}
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </div>
  );
}

export default App;
