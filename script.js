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
