console.log('Hello')

const priceInput = document.getElementById('total-price');
let priceValue

priceInput.addEventListener('input', () => {
    priceValue = Number(priceInput.value);
});

const radioInput = document.querySelectorAll('input[type="radio"]');
const customInput = document.getElementById('custom');
let tipValue 

for (let i = 0; i < radioInput.length; i++) {
    radioInput[i].addEventListener('click', () => {
        tipValue = Number(radioInput[i].value) * priceValue
    })
    radioInput[i].addEventListener('click', display)
}

customInput.addEventListener('input', () => {
    tipValue = Number(customInput.value)
})

customInput.addEventListener('input', display)

const peopleInput = document.getElementById('num-people');
let peopleValue

peopleInput.addEventListener('input', () => {
    peopleValue = Number(peopleInput.value)
})

peopleInput.addEventListener('input', display);

const warningText = document.getElementsByClassName('warning-text')[0];

peopleInput.addEventListener('input', () => {
    if (peopleValue === 0) {
        peopleInput.style.outlineColor = 'red';
        warningText.style.visibility = 'visible';
    } else {
        peopleInput.style.outlineColor = 'hsl(172, 67%, 45%)';
        warningText.style.visibility = 'hidden';
    }
})



const button = document.getElementById('button');

function display() {
    let tipResult = (tipValue / peopleValue).toFixed(2);
    let totalResult = ((priceValue + tipValue) / peopleValue).toFixed(2)
    if (isNaN(totalResult) === false && peopleValue !== 0) {
        document.getElementById('tip-per-person').innerHTML = tipResult;
        document.getElementById('total-per-person').innerHTML = totalResult;
        button.classList.replace('disabled', 'active');
    } 
}

button.addEventListener('click', () => {
    priceInput.value = null;
    customInput.value = '';
    peopleInput.value = null;

    let a = document.querySelector('input[type="radio"]:checked');
    if (a) {
        a.checked = false;
    }

    tipValue = undefined;
    peopleValue = undefined;

    document.getElementById('tip-per-person').innerHTML = '0.00';
    document.getElementById('total-per-person').innerHTML = '0.00';
    button.classList.replace('active', 'disabled');
})