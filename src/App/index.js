import React, { useState, useEffect } from 'react';
import CardFilterInput from '../components/CardFilterInput';
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
        const data = jsonData.students;
        // create empty tags property for each student;
        data.forEach((student) => {
          // eslint-disable-next-line no-param-reassign
          student.tags = ['tag10', 'tag20'];
        });
        setStudents(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.warn(students);

  // establish hooks for CardFilterInput.js
  const [searchName, setSearchName] = useState('');
  const [searchTag, setSearchTag] = useState('');

  return (
    <div className='mainDiv'>
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
      {students.filter((student) => {
        if ((`${student.firstName} ${student.lastName}`).toLowerCase().includes(searchName.toLowerCase())) {
          return student;
        } return '';
      // eslint-disable-next-line array-callback-return
      }).filter((student) => {
        student.tags.filter((tag) => {
          if (tag.toLowerCase().includes(searchTag.toLowerCase())) {
            return student;
          } return '';
        });
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
          />
      ))}
    </div>
  );
}

export default App;
