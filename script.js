// Wait until the page is fully loaded (safe practice)
document.addEventListener('DOMContentLoaded', function() {

    // ===== ALERT BUTTON =====
    const alertButton = document.getElementById('myAlertButton');

    if (alertButton) {
        alertButton.addEventListener('click', function() {
            alert('The external JavaScript file is working!');
        });
    }

    // ===== TEXT CHANGE BUTTON =====
    const myHeading = document.getElementById('status-heading');
    const myButton = document.getElementById('update-btn');

    if (myButton && myHeading) {
        myButton.addEventListener('click', function() {

            // Toggle text (better than one-time change)
            if (myHeading.textContent === "Original Text") {
                myHeading.textContent = "Text Updated Successfully!";
                myHeading.style.color = "blue";
            } else {
                myHeading.textContent = "Original Text";
                myHeading.style.color = "black";
            }

        });
    }

});
