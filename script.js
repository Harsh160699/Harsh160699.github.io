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

const projects = [
    {
        name: "Central Illinois Construct",
        image: "assets/images/central-illinois-construct.webp",
        url: "https://cicontractor.com/"
    },
    {
        name: "Sunset Metal Roofing",
        image: "assets/images/sunset-metal-roofing.webp",
        url: "https://www.sunsetmetalroofing.com/"
    },
    {
        name: "R.D. Davis Heating",
        image: "assets/images/rd-davis-heating.webp",
        url: "https://rddavisheating.com/"
    },
    {
        name: "Farmington Road Storage",
        image: "assets/images/farmington-road-storage.webp",
        url: "https://farmingtonroadstorage.com/"
    },
    {
        name: "Everything Water Plumbing",
        image: "assets/images/everything-water-plumbing.webp",
        url: "https://everythingwaterplumbing.com/"
    },
    {
        name: "Mark Hoerr Landscaping",
        image: "assets/images/mark-hoerr-landscaping.webp",
        url: "https://markhoerrlandscaping.com/"
    }
];


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
