// set values into an object with the same name as the parameters


// Consistency is King
// Clear, searchable, & obvious
// Var names that make sense

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

// DO NOT DO
// const hireDev = ({ devInfo }) => {
//   const hiredDevInfo = {
//     hired: true,
//     ...devInfo
//   }
//   return hiredDevInfo
// }

// Correct
const hireDev = ({ dev }) => {
  const hiredDev = {
    hired: true,
    ...dev
  };
  return hiredDev;
};

// X const ytd = 100000;
const salesYearToDate = 100000;

console.log(hireDev({ dev }));

