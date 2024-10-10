import React, { useState } from 'react';
import './SearchList.css';  // Import the CSS

const SearchList = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-list-container">
      <h1 className="title">Search Filter</h1>
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
      <ul className="item-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} className="list-item">
              {item}
            </li>
          ))
        ) : (
          <li className="no-items">No items found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchList;
