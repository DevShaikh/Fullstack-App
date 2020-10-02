import React from 'react';

const Search = () => {
  return (
    <div className="input-group w-50 mx-auto mt-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search records by school / teacher name..."
        required
        style={{minWidth: '15rem'}}
      />
      <div className="input-group-append">
        <button type="submit" className="btn btn-info">
          Search
        </button>
      </div>
      <div className="input-group-append">
        <button type="click" className="btn btn-danger">
          Clear search
        </button>
      </div>
    </div>
  );
};
export default Search;
