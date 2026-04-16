document.addEventListener('DOMContentLoaded', function() {

    const alertButton = document.getElementById('myAlertButton');
    if (alertButton) {
        alertButton.addEventListener('click', function() {
            alert('The external JavaScript file is working!');
        });
    }

    const heading = document.getElementById('status-heading');
    const changeBtn = document.getElementById('update-btn');

    if (heading && changeBtn) {
        changeBtn.addEventListener('click', function() {
            if (heading.textContent === "Hello, World!") {
                heading.textContent = "Welcome to My Gaming World!";
                heading.style.color = "blue";
            } else {
                heading.textContent = "Hello, World!";
                heading.style.color = "";
            }
        });
    }

});
// ===== USER INPUT DISPLAY =====
const inputBox = document.getElementById('user-input');
const displayBtn = document.getElementById('display-btn');
const outputText = document.getElementById('output-text');

if (displayBtn && inputBox && outputText) {
    displayBtn.addEventListener('click', function() {

        // Get what user typed
        const userText = inputBox.value;

        // Display it on the page
        outputText.textContent = userText;

        // Optional: clear input after
        inputBox.value = "";
    });
}
