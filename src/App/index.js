import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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

  console.warn(students);

  // make styles for the view w styled-components
  const Div = styled.div`
    border-radius: 10px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    max-width: 1900px;
    max-height: 600px;
    overflow-y: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  return (
    <Div>
      {students.map((student) => (
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
    </Div>
  );
}

export default App;
