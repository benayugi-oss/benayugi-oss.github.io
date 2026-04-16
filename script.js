document.addEventListener('DOMContentLoaded', function() {

    // ===== ALERT BUTTON =====
    const alertButton = document.getElementById('myAlertButton');

    if (alertButton) {
        alertButton.addEventListener('click', function() {
            alert('🎮 You just unlocked a hidden feature!');
        });
    }

    // ===== TEXT CHANGE BUTTON =====
    const heading = document.getElementById('status-heading');
    const changeBtn = document.getElementById('update-btn');

    if (heading && changeBtn) {
        changeBtn.addEventListener('click', function() {

            if (heading.textContent === "Hello, World!") {
                heading.textContent = "Welcome to My Gaming World 🎮";
                heading.style.color = "#00ffcc";
            } else {
                heading.textContent = "Hello, World!";
                heading.style.color = "";
            }

        });
    }

});
