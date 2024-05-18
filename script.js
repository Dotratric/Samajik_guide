document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // For demonstration, just log the values to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset the form
    document.getElementById('contactForm').reset();

    // Display a simple alert
    alert('Thank you for your message!');
});
