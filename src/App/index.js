import React, { useState, useEffect } from 'react';
import CardFilter from '../components/CardFilter';
import StudentCard from '../components/StudentCard';
import './App.scss';

function App() {
  // establish hooks to get students array
  const [students, setStudents] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('https://api.hatchways.io/assessment/students')
      .then((response) => response.json())
      .then((jsonData) => {
        setStudents(jsonData.students);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // establish hooks for TextFilter.js
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='mainDiv'>
      <CardFilter
        students={students}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {students.filter((student) => {
        if ((`${student.firstName} ${student.lastName}`).toLowerCase().includes(searchTerm.toLowerCase())) {
          return student;
        } return '';
      }).map((student) => (
        <StudentCard
          key={student.id}
          company={student.company}
          email={student.email}
          firstName={student.firstName}
          grades={student.grades}
          lastName={student.lastName}
          pic={student.pic}
          skill={student.skill}
          />
      ))}
    </div>
  );
}

export default App;
