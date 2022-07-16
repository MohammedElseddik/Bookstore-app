import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import NavBar from './components/navBar/NavBar';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';

import './app.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="books-container">
        <Routes>
          <Route exact path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
