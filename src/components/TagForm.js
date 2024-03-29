import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from '@material-ui/core';

const TagForm = ({
  setTags, firstName, lastName, students, setStudents, index, tags
}) => {
// create tag adding functionality
  const [newTag, setNewTag] = useState('');

  const handleInputChanges = (e) => {
    setNewTag(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTags((prevState) => ([...prevState, newTag]));
    // push tag array to student in student array:
    const newStudentsArray = students;
    const newTagArray = tags;
    newTagArray.push(newTag);
    newStudentsArray[index].tags = newTagArray;
    setStudents(newStudentsArray);
    // reset tag input field:
    setNewTag('');
  };

  return (
    <form
      id={`addTagForm-${firstName}-${lastName}`}
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <Input
        name='tag'
        type='text'
        value={newTag}
        onChange={handleInputChanges}
        placeholder='Add a tag'>
      </Input>
      <button className='no-display' type='submit'></button>
    </form>
  );
};

TagForm.propTypes = {
  setTags: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  students: PropTypes.array,
  setStudents: PropTypes.func,
  index: PropTypes.number,
  tags: PropTypes.array,
};

export default TagForm;
