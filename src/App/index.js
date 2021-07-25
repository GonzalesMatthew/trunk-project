import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core';
import CardFilterInput from '../components/CardFilterInput';
import StudentCard from '../components/StudentCard';
import './App.scss';

function App() {
  // create custom theme which uses Raleway:
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Raleway'
      ]
    }
  });

  // establish hooks to get/update students array
  const [students, setStudents] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('https://api.hatchways.io/assessment/students')
      .then((response) => response.json())
      .then((jsonData) => {
        const data = jsonData.students;
        // create empty tags property for each student;
        data.forEach((student) => {
          // eslint-disable-next-line no-param-reassign
          student.tags = [''];
        });
        setStudents(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // establish hooks for CardFilterInput.js
  const [searchName, setSearchName] = useState('');
  const [searchTag, setSearchTag] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <div className='mainDiv'>
        <div>
          <CardFilterInput
            searchTerm={searchName}
            setSearchTerm={setSearchName}
            placeholder='Search by name'
          />
          <CardFilterInput
            searchTerm={searchTag}
            setSearchTerm={setSearchTag}
            placeholder='Search by tag'
          />
        </div>
        <div className='scroll'>
          {students.filter((student) => {
            if ((`${student.firstName} ${student.lastName}`).toLowerCase().includes(searchName.toLowerCase()) && (student.tags.includes(searchTag))) {
              return student;
            } return '';
          }).map((student, i) => (
            <StudentCard
              key={student.id}
              company={student.company}
              email={student.email}
              firstName={student.firstName}
              grades={student.grades}
              lastName={student.lastName}
              pic={student.pic}
              skill={student.skill}
              students={students}
              setStudents={setStudents}
              index={i}
              currentTags={student.tags}
              />
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
