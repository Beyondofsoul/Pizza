import './scss/app.scss';
import Header from './components/Header.jsx';
import { Home } from './pages/Home.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './pages/Cart.jsx';
import { useState } from 'react';
import React from 'react';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="App">
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
