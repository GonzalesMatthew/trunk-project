import React, { useState, useEffect } from 'react';
import './App.scss';
// import getStudents from '../helpers/data/UserData';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('https://api.hatchways.io/assessment/students')
      .then((response) => response.json())
      .then((jsonData) => {
      // jsonData is parsed json object received from url
        setStudents(jsonData);
      })
      .catch((error) => {
      // handle your errors here
        console.error(error);
      });
  }, []);
  console.warn(students);

  return (
    <>
      Test print
    </>
  );
}

export default App;
