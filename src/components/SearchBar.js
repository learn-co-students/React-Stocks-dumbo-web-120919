import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="sort" value="Alphabetically" checked={null} onChange={(e) => props.sortStock(e.target.value)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name="sort" value="Price" checked={null} onChange={(e) => props.sortStock(e.target.value)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => props.filterStock(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
