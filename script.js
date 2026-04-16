// 1. Select the button using its ID
const alertButton = document.getElementById('myAlertButton');

// 2. Add an event listener to run code when clicked
alertButton.addEventListener('click', function() {
    // 3. The alert action
    alert('The external JavaScript file is working!');
});
