const inputs = document.querySelectorAll('.calculator__inputs_input');
const labels = document.querySelectorAll('.calculator__inputs_label');
const errorMsg = document.querySelectorAll('.calculator__inputs_error-msg');
const dayInput = document.getElementById('dayInput');
const monthInput = document.getElementById('monthInput');
const yearInput = document.getElementById('yearInput');

// date
const today = new Date();

document.querySelector('.calculator__button_btn').addEventListener('click', () => {
    errorMsg.forEach(e => {
        e.innerHTML = '';
    });
    inputs.forEach(input => {
        input.classList.remove('calculator__inputs_input--incorrect');
    });
    labels.forEach(label => {
        label.classList.remove('calculator__inputs_label--incorrect');
    });
    // VALIDATION
    // if empty
    if (dayInput.value === '' ||
        monthInput.value === '' ||
        yearInput.value === '') {
        incorrectInput();
        errorMsg.forEach(e => {
            e.innerHTML = 'This field is required';
        });
    } else {
        if (parseInt(dayInput.value) > 31 || parseInt(dayInput.value) < 1) {
            incorrectInput()
            errorMsg[0].innerHTML = 'Must be a valid day';
        }
        if (parseInt(monthInput.value) > 12 || parseInt(monthInput.value) < 1) {
            incorrectInput();
            errorMsg[1].innerHTML = 'Must be a valid month';
        }
        if (parseInt(yearInput.value) > today.getFullYear() || parseInt(yearInput.value) < 1 ) {
            incorrectInput();
            errorMsg[2].innerHTML = 'Must be in the past';
        }
    }
});

const incorrectInput = () => {
    inputs.forEach(input => {
        input.classList.add('calculator__inputs_input--incorrect');
    });
    labels.forEach(label => {
        label.classList.add('calculator__inputs_label--incorrect');
    });
}