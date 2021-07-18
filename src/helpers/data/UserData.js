const getStudents = () => {
  // eslint-disable-next-line no-undef
  fetch('https://api.hatchways.io/assessment/students')
    .then((response) => response.json())
    .then((jsonData) => {
    // jsonData is parsed json object received from url
      console.warn(jsonData);
    })
    .catch((error) => {
    // handle your errors here
      console.error(error);
    });
};

export default { getStudents };
