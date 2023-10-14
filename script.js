// Function to get the IP address
function getIPAddress() {
    fetch('https://api.ipify.org')
        .then(response => response.text())
        .then(data => {
            document.getElementById('ipAddress').innerText = data;
        })
        .catch(error => console.error('Error:', error));
}

// Call the function when the page is loaded
window.onload = getIPAddress;
