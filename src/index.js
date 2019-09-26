document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;


//const sayHi = () => { console.log('hi'); }
//sayHi();

//const [a, b, c, d] = ['hi', 'niko', 'newItem', 'spreadftw']
// X const a = newArray[0];
// X const b = newArray[1]
const newArray = ['hi', 'niko', 'newItem', 'spreadftw']
const [a, b, ...c] = newArray;
//console.log(c);

const person = {
  name: "Scott",
  age: 32,
  job: "web dev"
};
// set values into an object with the same name as the property
const makePerson = (name, age, job) => {
  return {
    name,
    age,
    job
  }
}

//pull out individual properties or variables form an object
const dev = makePerson('niko', 31, 'web developer');
// X const name = dev.name;
// X const devName  = dev.name;
const { name, ...rest } = dev;

console.log(name, rest);
