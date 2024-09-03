import React from 'react';
import './SearchRegister.css';

function SearchRegister() {
  return (
    <section className="search-register">
      <input type="text" placeholder="검색" className="search-input" />
      <button className="search-button">검색</button>
    </section>
  );
}

export default SearchRegister;
