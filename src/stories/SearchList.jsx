import React, { useState } from 'react';

const SearchList = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Search List</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        style={{ padding: '8px', marginBottom: '10px', width: '200px' }}
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} style={{ listStyleType: 'none', padding: '5px' }}>
              {item}
            </li>
          ))
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchList;
