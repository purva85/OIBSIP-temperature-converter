const tempInput = document.getElementById('temp-input');
const unitSelect = document.getElementById('unit-select');
const convertBtn = document.getElementById('convert-btn');
const resultPara = document.getElementById('result');

// Add event listener for convert button click
convertBtn.addEventListener('click', convertTemperature);

// Add event listener for input field changes to enable/disable button
tempInput.addEventListener('input', () => {
  if (tempInput.value !== '' && !isNaN(parseFloat(tempInput.value))) {
    convertBtn.classList.add('enabled');
    convertBtn.disabled = false;
  } else {
    convertBtn.classList.remove('enabled');
    convertBtn.disabled = true;
  }
});

// Function to convert temperature
function convertTemperature(event) {
  event.preventDefault();

  const tempValue = parseFloat(tempInput.value);
  const unitValue = unitSelect.value;

  // Check if input is a valid number
  if (isNaN(tempValue)) {
    alert('Please enter a valid temperature value!');
    return;
  }

  let convertedTemp = 0;
  let convertedUnit = '';

  // Perform conversion based on selected unit
  switch (unitValue) {
    case 'celsius':
      if (tempValue < -273.15) {
        alert('Temperature cannot be lower than absolute zero!');
        return;
      }
      convertedTemp = tempValue * 9 / 5 + 32;
      convertedUnit = 'Fahrenheit';
      break;
    case 'fahrenheit':
      if (tempValue < -459.67) {
        alert('Temperature cannot be lower than absolute zero!');
        return;
      }
      convertedTemp = (tempValue - 32) * 5 / 9;
      convertedUnit = 'Celsius';
      break;
    case 'kelvin':
      if (tempValue < 0) {
        alert('Temperature cannot be lower than absolute zero!');
        return;
      }
      convertedTemp = tempValue - 273.15;
      convertedUnit = 'Celsius';
      break;
  }

  // Display the converted temperature
  resultPara.textContent = `The converted temperature is ${convertedTemp.toFixed(2)} ${convertedUnit}`;
}