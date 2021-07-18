import React from 'react';
import PropTypes from 'prop-types';

const CardFilter = ({ students }) => {
  console.warn(students);

  function myFunction() {
    // Declare variables
    const input = document.getElementById('myInput');
    const filter = input.value.toUpperCase();
    const ul = document.getElementById('myUL');
    const li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (let i = 0; i < li.length; i += 1) {
      const a = li[i].getElementsByTagName('a')[0];
      const txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  }

  return (
  <>
    <input type="text" id="myInput" onKeyUp={myFunction()} placeholder="Search by names"></input>
  </>
  );
};

CardFilter.propTypes = {
  students: PropTypes.array,
};

export default CardFilter;
