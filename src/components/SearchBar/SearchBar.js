import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types';

export default function SearchBar({ onSearch }) {
const [searchQuery, setSearchQuery] = useState('');

const handleQuerySearch = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Введіть щось');
    }

    onSearch(searchQuery);
    setSearchQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="query"
          type="text"
          name="searchQuery"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="Search films ..."
          onChange={handleQuerySearch}
        />
        <button
          type="submit"
        >
          Search
        </button>
        <Outlet />
      </form>
    </>
  );
}