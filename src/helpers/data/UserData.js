import axios from 'axios';

const getStudents = () => new Promise((resolve, reject) => {
  axios.get('https://api.hatchways.io/assessment/students')
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default { getStudents };
