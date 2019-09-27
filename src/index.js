document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

const heading = document.createElement('h1');
heading.innerHTML = '<em>Hello from JavaScript</em> ' + document.URL;
document.body.appendChild(heading);
console.log(document.URL);
console.log(heading);