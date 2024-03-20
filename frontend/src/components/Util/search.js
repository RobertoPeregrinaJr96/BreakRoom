import React, { useState } from "react";
import "../Util/style/search.css";

function SearchComponent({ items }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [boolean, setBoolean] = useState(false);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    // Filter the items based on the search term
    const lowerCaseItem = searchTerm.toLowerCase();
    const filteredResults = items.filter((item) => {
      const name = item.name;
      return name.toLowerCase().includes(lowerCaseItem);
    });

    setSearchResults(filteredResults);
    setBoolean(searchTerm.length > 0 && filteredResults.length > 0);
  };
  const SubmitItem = (e, item) => {
    e.preventDefault();
    console.log(item.name);
  };
  return (
    <>
      <div className={`search-container-${boolean}`}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <div class="search-results" id="searchResults">
          {boolean === true ? (
            <ul>
              {searchResults.map((item, index) => (
                <li key={index} onClick={(e) => SubmitItem(e, item)}>
                  {item.name}
                </li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchComponent;
