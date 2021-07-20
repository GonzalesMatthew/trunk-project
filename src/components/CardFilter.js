import React from 'react';
import PropTypes from 'prop-types';

const CardFilter = ({ students, setSearchTerm }) => {
  console.warn(students);

  return (
  <>
    <input type="text" id="myInput" onChange={(e) => { setSearchTerm(e.target.value); } } placeholder="Search by names"></input>
  </>
  );
};

CardFilter.propTypes = {
  students: PropTypes.array,
  setSearchTerm: PropTypes.function,
};

export default CardFilter;
