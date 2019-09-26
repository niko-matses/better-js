// set values into an object with the same name as the parameters

const makePerson = ({ firstName, lastName, age, job }) => {
  return {
    name: firstName + ' ' + lastName,
    age,
    job,
    lastName
  }
}

const dev = makePerson({
  firstName: 'scott',
  lastName: 'tolinski',
  age: 32,
  job: 'webdev'
});


console.log(dev);

