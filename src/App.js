import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home'
import FavList from './components/favList/FavList';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favlist" element={<FavList />} />
      </Routes>
    </>
  );
}

export default App;
