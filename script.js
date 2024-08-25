// Function to handle header visibility on scroll
function handleHeaderScroll(menuHeader) {
    document.addEventListener('scroll', function() {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollPosition > 60) {
            menuHeader.style.transform = 'translateY(-100%)';
        } else {
            menuHeader.style.transform = 'translateY(0)';
        }
    });

    menuHeader.addEventListener('mouseover', function() {
        menuHeader.style.transform = 'translateY(0)';
    });

    menuHeader.addEventListener('mouseout', function() {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollPosition > 60) {
            menuHeader.style.transform = 'translateY(-100%)';
        }
    });
}

// Function to handle sidebar link highlighting
function handleSidebarHighlight(sections, sidebarLinks) {
    document.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 100; // Adjust for header height if needed
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                sidebarLinks.forEach(link => link.classList.remove('highlight'));
                sidebarLinks[index].classList.add('highlight');
            }
        });
    });
}

// Function to handle sidebar smooth scrolling
function handleSidebarScroll(sidebarLinks) {
    sidebarLinks.forEach(link => {
        const targetId = link.getAttribute('data-scroll-target');
        const targetSection = document.getElementById(targetId);

        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Initialize functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const menuHeader = document.querySelector('.menu-header');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const sections = document.querySelectorAll('section');

    if (menuHeader) {
        handleHeaderScroll(menuHeader);
    }
    
    if (sidebarLinks.length && sections.length) {
        handleSidebarScroll(sidebarLinks);
        handleSidebarHighlight(sections, sidebarLinks);
    }
});








