import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  makeStyles, Card, CardHeader, CardContent, Avatar, Chip
} from '@material-ui/core';
import Grades from './Grades';
import TagForm from './TagForm';

// make styles for the view
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 8,
    marginBottom: 8,
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    backgroundColor: '#D1CBC1',
    maxHeight: 380,
    overflow: 'auto',
  },
  fullName: {
    fontWeight: 'fontWeightBold',
  }
}));

const StudentCard = ({
  company,
  email,
  firstName,
  grades,
  lastName,
  pic,
  skill,
  students,
  setStudents,
  index,
  currentTags,
}) => {
  const classes = useStyles();

  // create tag hooks
  const [tags, setTags] = useState(currentTags);

  // create toggle logic
  const [openToggle, setOpenToggle] = useState(false);
  const toggleOn = () => setOpenToggle(!openToggle);

  // convert full name to uppercase
  const fullName = `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;

  // compute average of grades array
  let total = 0;
  for (let i = 0; i < grades.length; i += 1) {
    total += Number(grades[i]);
  }
  const average = `${total / grades.length}%`;

  return (
    <Card className="student-card d-flex flex-row'">
      <div>
        <Avatar
          alt={`image of ${firstName} ${lastName}`}
          src={pic}
          className={classes.large}
        />
      </div>
      <div className='d-flex flex-column flex-grow-1'>
        <CardHeader className={classes.fullName}
          title={fullName}
        />
        <CardContent>
          Email: {email}<br/>
          Company: {company}<br/>
          Skill: {skill}<br/>
          Average:{average}<br/>
          {openToggle
            && <Grades grades={grades}/>
          }
          {/* Display tags: */}
          { tags.length > 1
              && tags.map((tag, i) => <Chip key={i} size="small" label={tag}/>)
          }
          {/* Component to create/set tags: */}
          <TagForm
            setTags={setTags}
            firstName={firstName}
            lastName={lastName}
            students={students}
            setStudents={setStudents}
            index={index}
            tags={tags}
          />
        </CardContent>
      </div>
      {/* button to view test results: */}
      <button className='button' type='button' onClick={toggleOn}>
        {openToggle ? <i className='fas fa-minus fa-2x'></i> : <i className='fas fa-plus fa-2x'></i>}
      </button>
    </Card>
  );
};

StudentCard.propTypes = {
  company: PropTypes.string,
  email: PropTypes.string,
  firstName: PropTypes.string,
  grades: PropTypes.array,
  lastName: PropTypes.string,
  pic: PropTypes.string,
  skill: PropTypes.string,
  fullName: PropTypes.string,
  students: PropTypes.array,
  setStudents: PropTypes.func,
  index: PropTypes.number,
  currentTags: PropTypes.array,
};

export default StudentCard;
