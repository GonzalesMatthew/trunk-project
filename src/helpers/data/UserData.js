import axios from 'axios';

const getStudents = () => new Promise((resolve, reject) => {
  axios.get('https://api.hatchways.io/assessment/students.json')
    .then((response) => resolve((response)))
    .catch((error) => reject(error));
});

export default { getStudents };
