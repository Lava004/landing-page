document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        // You can perform actions like sending data to a server here
        console.log('Form submitted with data:', Object.fromEntries(formData));
        this.reset();
    });
});