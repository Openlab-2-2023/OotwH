
[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]

// script.js
document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');
    
    // Simulate loading process
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3000); // Adjust the timeout duration as needed
});

