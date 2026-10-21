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

const projectsGrid = document.getElementById("projects-grid");

projects.forEach(project => {

    const article = document.createElement("article");

    article.className = "project";

    article.innerHTML = `
        <a href="${project.url}" 
           target="_blank" 
           rel="noopener noreferrer"
           class="project-image">

            <img src="${project.image}" alt="${project.name} website">

            <div class="project-overlay">
                <span>VIEW SITE ↗</span>
            </div>

        </a>

        <h3>${project.name}</h3>
    `;

    projectsGrid.appendChild(article);
});
