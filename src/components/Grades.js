import React from 'react';
// import { ListItem, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';

const Grades = ({ grades }) => (
  <ul className='no-bullet'>
    <br/>
    {grades.map((grade, i) => <li key={i}>Test {i + 1}: &emsp; {grade}%</li>)}
  </ul>
);

Grades.propTypes = {
  grades: PropTypes.array,
};

export default Grades;
