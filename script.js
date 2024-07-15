document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate sending the message
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    alert('Thank you for your message, ' + name + '. I will get back to you soon.');
    document.getElementById('contact-form').reset();
});
