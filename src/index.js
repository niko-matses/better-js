








// Immutable vs Mutable
// can't be changed vs can be changed
// isn't changed vs changed

// Pure Functions
// Always return the same thing, with the same input


// Pure
// Easier to test and control
const addTwo = (x) => x + 2;
console.log(addTwo(2));
console.log(addTwo(3));
console.log(addTwo(4));

// Not Pure!
let multi = 10 // External State
const addThree = (x) => { x + multi };
console.log(addThree(2));
multi = 11;
console.log(addThree(2));
multi = 12;
console.log(addThree(2));


let name = "Scott";
const fullName = name + " Tolinski";

const BASE_SALARY = 1600;
const SALARY_MULTIPLIER = 4;

const makePerson = ({ firstName, lastName, age, job }) => {
  return {
    name: firstName + ' ' + lastName,
    age,
    job,
    lastName,
    salary: BASE_SALARY * SALARY_MULTIPLIER
  };
};

const dev = makePerson({
  firstName: 'scott',
  lastName: 'tolinski',
  age: 32,
  job: 'webdev'
});

const hireDev = ({ dev }) => {
  const hiredDev = {
    hired: true,
    ...dev
  };
  return hiredDev;
};


//console.log(hireDev({ dev }));

