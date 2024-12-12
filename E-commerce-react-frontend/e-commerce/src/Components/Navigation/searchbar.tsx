import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'



const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform the search operation with the searchTerm
    console.log('Searching for:', searchTerm);
  };

  return (
    <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', fontFamily: 'initial',height:'40px' }}>
      <input
        type="search"
        placeholder="Refrigerator,washing machine,..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          marginBottom: '2%',
          borderRadius: '5px',
          fontSize: '16px',
          width: '300px',
          backgroundColor: '#f0f0f0', // Set your desired background color
        }}
      />
      <button type="submit" style={{ padding: '10px', borderRadius: '5px', marginBottom: '2%', fontSize: '16px' }}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
