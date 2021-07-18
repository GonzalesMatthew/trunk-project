import PropTypes from 'prop-types';
import React from 'react';
import {
  makeStyles, Card, CardHeader, CardContent, Avatar,
} from '@material-ui/core';

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
}));

const StudentCard = ({
  company,
  email,
  firstName,
  grades,
  lastName,
  pic,
  skill,
}) => {
  const classes = useStyles();
  // compute average of grades array
  let total = 0;
  for (let i = 0; i < grades.length; i += 1) {
    total += Number(grades[i]);
  }
  const average = `${total / grades.length}%`;
  // end average computation

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
        <CardHeader
          title={`${firstName} ${lastName}`}
        />
        <CardContent>
          Email: {email}<br/>
          Company: {company}<br/>
          Skill: {skill}<br/>
          Average:{average}
        </CardContent>
      </div>
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
};

export default StudentCard;
