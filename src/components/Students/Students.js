import React from "react";

const Students = (props) => {
  //data from main component stored into students variable
  const students = props.students;
  //this component will be rendering studentslist
  const studentsList = students.map((student) => (
    <li key={student.id}>
      {student.firstName} {student.lastName}
    </li>
  ));

  return (
    <div>
      <h1>Students</h1>
      <div className="studentList">
        <ul>{studentsList}</ul>
      </div>
    </div>
  );
};

export default Students;
