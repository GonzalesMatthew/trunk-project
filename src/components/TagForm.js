import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from '@material-ui/core';

const TagForm = ({ setTags }) => {
// create tag adding functionality
  const [newTag, setNewTag] = useState('');

  const handleInputChanges = (e) => {
    setNewTag(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTags((prevState) => ([...prevState, newTag]));
    setNewTag('');
  };

  return (
    <form
      id='addTagForm'
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
};

export default TagForm;
