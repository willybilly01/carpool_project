// Select all day buttons
const buttons = document.querySelectorAll('.day-button');

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the 'selected' class on click
        button.classList.toggle('selected');
    });
});
