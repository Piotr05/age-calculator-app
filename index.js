const inputs = document.querySelectorAll('.calculator__inputs_input');
const labels = document.querySelectorAll('.calculator__inputs_label');
const errorMsg = document.querySelectorAll('.calculator__inputs_error-msg');
const dayInput = document.getElementById('dayInput');
const monthInput = document.getElementById('monthInput');
const yearInput = document.getElementById('yearInput');
const output = document.querySelectorAll('.calculator__output_number');

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

    // days in month
    const daysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
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
        } else if (parseInt(dayInput.value) > daysMonth[parseInt(monthInput.value) - 1]) {
            incorrectInput()
            errorMsg[0].innerHTML = 'Must be a valid date';
        } else {
            calculateDate();
        }
        if (parseInt(monthInput.value) > 12 || parseInt(monthInput.value) < 1) {
            incorrectInput();
            errorMsg[1].innerHTML = 'Must be a valid month';
        } else {
            calculateDate();
        }
        if (parseInt(yearInput.value) > today.getFullYear() || parseInt(yearInput.value) < 1 ) {
            incorrectInput();
            errorMsg[2].innerHTML = 'Must be in the past';
        } else {
            calculateDate();
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

const calculateDate = () => {
    const date = new Date(
        parseInt(yearInput.value),
        parseInt(monthInput.value),
        parseInt(dayInput.value)
    )
    const years = today.getFullYear() - date.getFullYear();
    const months = today.getMonth() - date.getMonth();
    const days = today.getDate() - date.getDate();

    output[0].innerHTML = years;
    output[1].innerHTML = months + 1;
    output[2].innerHTML = days;
}