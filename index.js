const inputs = document.querySelectorAll('.calculator__inputs_input');
const labels = document.querySelectorAll('.calculator__inputs_label');

document.querySelector('.calculator__button_btn').addEventListener('click', () => {
    incorrectInput();
});

const incorrectInput = () => {
    inputs.forEach(input => {
        input.classList.toggle('calculator__inputs_input--incorrect');
    });
    labels.forEach(label => {
        label.classList.toggle('calculator__inputs_label--incorrect');
    })
}