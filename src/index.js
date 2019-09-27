// Generate random color
// RGB 0-255
// Apply to DOM
// update color on event

const generateColorValue = () => Math.floor(Math.random() * 256);

const red = generateColorValue();
const green = generateColorValue();
const blue = generateColorValue();

const createColor = () => {
  return `rgb(${red}, ${green}, ${blue})`
}

const applyColorToBody = color => {
  return (document.body.style.backgroundColor = color);
}

const addRandomColorToBg = () => {
  const color = createColor();
  return applyColorToBody(color);
}
console.log(addRandomColorToBg());

const newColors = document.getElementById('new-colors');

// On click attatch 1 event
// Only one event per onClick, last one applied
// newColors.onclick = () => addRandomColorToBg();
// newColors.onclick = () => console.log('hi');

// addEventListener allows for many actions to be applied to the same event
newColors.addEventListener('click', addRandomColorToBg);
newColors.addEventListener('click', () => { console.log('hi') });

// Generate Text Color
// White if BG is dark
// Black is BG is light

const getColorIntegers = () => {
  const redValue = parseInt(red);
  const greenValue = parseInt(green);
  const blueValue = parseInt(blue);
  return (
    console.log('red\'s integer is ' + redValue),
    console.log('green\'s integer is ' + greenValue),
    console.log('blue\'s integer is ' + blueValue)
  )
}
getColorIntegers();
