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
    },
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

const projectsPerLoad = 9;
let visibleProjects = 0;


// Create project card
function createProject(project) {

    const article = document.createElement("article");

    article.className = "project";

    article.innerHTML = `
        <a href="${project.url}"
           target="_blank"
           rel="noopener noreferrer"
           class="project-image">

            <img src="${project.image}"
                 alt="${project.name} website">

            <div class="project-overlay">
                <span>VIEW SITE ↗</span>
            </div>

        </a>

        <h3>${project.name}</h3>
    `;

    return article;
}


// Show next 9 projects
function loadProjects() {

    const nextProjects = projects.slice(
        visibleProjects,
        visibleProjects + projectsPerLoad
    );

    nextProjects.forEach(project => {
        projectsGrid.appendChild(createProject(project));
    });

    visibleProjects += nextProjects.length;

    updateLoadMoreButton();
}


// Create Load More button
const loadMoreButton = document.createElement("button");

loadMoreButton.className = "load-more";
loadMoreButton.textContent = "LOAD MORE";

loadMoreButton.addEventListener("click", loadProjects);


// Add button after project grid
projectsGrid.parentNode.appendChild(loadMoreButton);


// Hide button when everything is loaded
function updateLoadMoreButton() {

    if (visibleProjects >= projects.length) {
        loadMoreButton.style.display = "none";
    } 
}


// Initial 9 projects
loadProjects();
    
