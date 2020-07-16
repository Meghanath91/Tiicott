import React from "react";

const SearchResults = (props) => {
  //responsible to render filtered students with search results
  const studentsList = props.results.map((student) => (
    <li key={student.id}>
      {student.firstName} {student.lastName}
    </li>
  ));
  return (
    <div>
      <ul>{studentsList}</ul>
    </div>
  );
};
export default SearchResults;
