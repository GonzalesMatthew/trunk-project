import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import StudentCard from '../components/StudentCard';
import './App.scss';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('https://api.hatchways.io/assessment/students')
      .then((response) => response.json())
      .then((jsonData) => {
      // jsonData is parsed json object received from url
        setStudents(jsonData.students);
      })
      .catch((error) => {
      // handle your errors here
        console.error(error);
      });
  }, []);
  console.warn(students);
  return (
    <Container>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          city={student.city}
          company={student.company}
          email={student.email}
          firstName={student.firstName}
          grades={student.grades}
          id={student.id}
          lastName={student.lastName}
          pic={student.pic}
          skill={student.skill}
          />
      ))}
    </Container>
  );
}

export default App;
