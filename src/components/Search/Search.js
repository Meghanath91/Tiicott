import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import SearchResults from "./SearchResults";

const Search = (props) => {
  //define states and data from app component
  const students = props.students;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //this function will handle changes in input
  const handleChange = (evt) => {
    evt.preventDefault();
    const searchValue = evt.target.value;
    //change state of search term
    setSearchTerm(searchValue);
  };

  //function to handle search form submit event
  const handleSubmit = (evt) => {
    evt.preventDefault();
    //filter the name according to search input
    const results = students.filter(
      (student) =>
        student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <TextField
          id="outlined-secondary"
          label="Search student"
          value={searchTerm}
          onChange={handleChange}
          variant="outlined"
          color="secondary"
        />
        <input type="submit" value="Submit" />
      </form>
      <SearchResults results={searchResults} />
    </div>
  );
};

export default Search;
