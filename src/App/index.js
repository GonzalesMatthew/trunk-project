import React, { useState, useEffect } from 'react';
import { makeStyles, Container, Paper } from '@material-ui/core';
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
      // jsonData is parsed json object received from url
        setStudents(jsonData.students);
      })
      .catch((error) => {
      // handle your errors here
        console.error(error);
      });
  }, []);

  console.warn(students);

  // make styles for the view
  const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: 8,
      marginBottom: 8,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
      backgroundColor: '#D1CBC1',
      maxHeight: 380,
      overflow: 'auto',
    },
  }));

  const classes = useStyles;

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper} elevation={6}>
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
      </Paper>
    </Container>
  );
}

export default App;
