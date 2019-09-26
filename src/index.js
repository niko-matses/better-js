document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

const newArray = ['hi', 'niko', 'newItem', 'spreadftw']

const [a, b, ...c] = newArray;

// const a = newArray[0];
// const b = newArray[1];

console.log(c);

const sayHi = () => { console.log('hi'); }

sayHi();