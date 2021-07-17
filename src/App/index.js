import React, { useEffect, useState } from 'react';
import './App.scss';
import getStudents from '../helpers/data/UserData';

function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getStudents().then(setStudents);
  }, []);

  console.warn(students);

  return (
    <>
      Test print
    </>
  );
}

export default App;
