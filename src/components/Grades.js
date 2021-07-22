import React from 'react';
import PropTypes from 'prop-types';

const Grades = ({ grades }) => {
  grades.forEach((grade, i) => console.warn(`Test ${i}: ${grade}%`));
  return (
    <>
    </>
  );
};

Grades.propTypes = {
  grades: PropTypes.array,
};

export default Grades;
