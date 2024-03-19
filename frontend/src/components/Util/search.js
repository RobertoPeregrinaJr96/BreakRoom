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

    // need to work on this logic
    if(filteredResults.length != null) setBoolean(false)
    if (searchTerm.length >= 1) setBoolean(true);
    else setBoolean(false);
    setSearchResults(filteredResults);
  };
  const SubmitItem = (e, item) => {
    e.preventDefault();
    console.log(item.name);
  };
  console.log(searchTerm.length);
  console.log(searchResults);
  console.log(boolean);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <div class="search-results" id="searchResults">
          {boolean ? (
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
