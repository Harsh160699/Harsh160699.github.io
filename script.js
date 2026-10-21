// Smooth navigation for internal links

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (event) {

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// Update the page title when the tab becomes hidden

document.addEventListener('visibilitychange', () => {

    if (document.hidden) {
        document.title = 'Come back 👋 | Harsh Patel';
    } else {
        document.title = 'Harsh Patel | WordPress Backend Developer';
    }

});
