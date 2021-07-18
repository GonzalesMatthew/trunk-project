import PropTypes from 'prop-types';
import React from 'react';
import {
  Card, CardHeader, CardMedia, CardContent
} from '@material-ui/core';

const StudentCard = ({
  city,
  company,
  email,
  firstName,
  grades,
  id,
  lastName,
  pic,
  skill,
}) => (
    <Card className="student-card">
      <CardHeader
        title={firstName}
      />
      <CardMedia
        component='img'
        alt= 'studentpic of'
        image={pic}
      />
        <CardContent>{city} {company} {email} {grades} {id} {lastName} {skill} {lastName} </CardContent>
    </Card>
);

StudentCard.propTypes = {
  city: PropTypes.string,
  company: PropTypes.string,
  email: PropTypes.string,
  firstName: PropTypes.string,
  grades: PropTypes.array,
  id: PropTypes.string,
  lastName: PropTypes.string,
  pic: PropTypes.string,
  skill: PropTypes.string,
};

export default StudentCard;
