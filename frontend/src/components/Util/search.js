import React, { useState } from "react";

function SearchComponent({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  let menuItems = [{ name: "hello" }];

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    // Filter the data based on the search term
    const filteredResults = data.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
    return (
      <>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </>
    );
  };
}

export default SearchComponent;
