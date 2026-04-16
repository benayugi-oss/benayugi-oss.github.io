document.addEventListener('DOMContentLoaded', function() {

    // ===== ALERT BUTTON =====
    const alertButton = document.getElementById('myAlertButton');
    if (alertButton) {
        alertButton.addEventListener('click', function() {
            alert('The external JavaScript file is working!');
        });
    }

    // ===== TEXT CHANGE BUTTON =====
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

    // ===== USER INPUT WITH IF/ELSE =====
    const inputBox = document.getElementById('user-input');
    const displayBtn = document.getElementById('display-btn');
    const outputText = document.getElementById('output-text');

    if (displayBtn && inputBox && outputText) {
        displayBtn.addEventListener('click', function() {

            const userText = inputBox.value.toLowerCase();

            if (userText === "ps3") {
                outputText.textContent = "🔥 Great choice! PS3 is legendary.";
            } 
            else if (userText === "gta") {
                outputText.textContent = "🚗 GTA is pure chaos and fun!";
            } 
            else if (userText === "cod") {
                outputText.textContent = "🎯 COD is all about skill!";
            } 
            else if (userText === "") {
                outputText.textContent = "⚠️ You didn’t type anything!";
            } 
            else {
                outputText.textContent = "Hmm... I don't know that one!";
            }

            inputBox.value = "";
        });
    }

});
