document.getElementById('menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('https://example.com/submit-form', { // Replace with your server endpoint
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Your message has been sent successfully!');
        this.reset();
    })
    .catch(error => {
        alert('There was an error sending your message. Please try again later.');
    });
});
