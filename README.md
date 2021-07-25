# Trunk Front-End Project

## Contributors 
[Matthew Gonzales](https://github.com/GonzalesMatthew)

## Technologies
* React
* Prop-types
* Material-Ui
* Sass/SCSS
* Axios
* Styled-components (actually makeStyles from Material-Ui)

## Prompt requirements and solutions:

### Get the student data from the URL and display them on screen
* Established hooks to store students in an array
* Utilized useEffect to read the URL with a fetch promise only when App initially renders
* Used .map() to create cards for each student (Material-ui -- note: could have also used react-strap/bootstrap, but I started using material and enjoy the styling more)
* Built a StudentCards component to house what each student card should contain

### Replicate student cards styling
* Imported Raleway from Google Fonts
* Material-Ui components have specificity which negate Raleway from appearing in certain Material-ui components
  * Made a custom Material-Ui theme so that these components default to Raleway
  * for CardContent component used a .raleway class to ensure Raleway is included there
* Included border radis and thin gray border for each student picture
* Included margin
* First name and last name are passed to Students cards where their full name will be concatanated, uppercased (.toUpperCase()) and displayed
* Created class to bolden and make full name font size bigger
* used makeStyles (similar to styled-components) for certain StudentCard styling

### Filter students by name
* Built a React Component to house an input field which will be used to filter students
  * It accepts props so that I can use multiple instances of it, which will be useful later on
* Using .filter, I can compare a hook -- which stores the value of the search input -- and then build a new array to map through
  * This is done before the .map() so that I only create cards for students which met the search requirement

### Each student has an expandable view which displays their individual test results
* Imported Font Awesome into Sass style sheet so I can use some icons (plus and minus icons)
* Used opacity=1 on button hover to provide contrast on hover
* Used a hook to store a true/false value
  * built a toggle function with this hook which will control ternary operator logic, based on status determined by button click
    * it decides whether the button icon is a plus or minus sign (using ternary operator logic)
    * it also either displays test results or doesn't (using &&)

### Each student can have tags attached to them
* Tag hooks are created at the StudentCard level to store an array of tags
  * These hooks are passed into a new Component TagForm, which houses the tag input field and logic to create and update tags
    * Here a new student property, which is an array called 'tags', is created and the student hook is set to a new array -- which includes the updated tag property for each student

### Filter students by tags
* Since we already made a Component which lets us enter text to then be filtered for, we can call it again. This time we use different hooks/props which consider tags instead of names (and also a different input placeholder value gets passed)
* Considering that the student.tags property doesn't exist upon import, we have to modify the promise so that it gets created manually before our students hook is set
  * This way our tag input search logic will not break our App upon initial render
* Now we can use .filter() again, this time to see if the search value for tags is included in the tags array of each student (using .include())
  * We can use the conditional operator && and join our two tests since we want to filter by both search inputs simultaneously

## Thank you!
Thank you for reading my README and reviewing my application. I had a lot of fun building it, was able to review concepts I learned in past projects and even learned some new things in the process (i.e. material-ui themes, some CSS tricks)

### In closing
I hope you found my explanations clear and succinct. (I strive to convey accurate information in my communication!) Thanks for reviewing my app, it was fun to make!

If you are interested in other projects of mine please see my personal bio site here.
### Link to my personal bio site
[Personal Bio Site](https://www.matthewggonzales.com)
