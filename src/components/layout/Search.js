import React, {useContext, useState} from 'react';
import AppContext from '../../context/photostate/appContext';
import {FaSearch, FaRecycle} from 'react-icons/fa';

const Search = () => {
  const appContext = useContext(AppContext);
  const {searchRecords, clearSearch} = appContext;

  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const searchClick = e => {
    e.preventDefault();
    searchRecords(text);
  };
  const clearClick = e => {
    e.preventDefault();
    clearSearch();
    setText('');
  };

  return (
    <form className="input-group w-50 mx-auto" onSubmit={searchClick}>
      <input
        type="text"
        value={text}
        onChange={onChange}
        className="form-control md-w-100"
        placeholder="Search records..."
        required
        style={{minWidth: '15rem'}}
      />
      <div className="input-group-append">
        <button type="submit" className="btn btn-info">
          <FaSearch className="mr-1" />
          Search
        </button>
      </div>
      <div className="input-group-append">
        <button type="click" className="btn btn-dark" onClick={clearClick}>
          <FaRecycle className="mr-1" />
          Clear search
        </button>
      </div>
    </form>
  );
};
export default Search;
