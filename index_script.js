// index_script.js

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main section');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const menuHeader = document.querySelector('.menu-header');

    // Use common functions from script.js
    if (typeof handleHeaderScroll === 'function') {
        handleHeaderScroll(menuHeader);
    }

    if (typeof handleSidebarHighlight === 'function') {
        handleSidebarHighlight(sections, sidebarLinks);
    }

    if (typeof handleSidebarScroll === 'function') {
        handleSidebarScroll(sidebarLinks);
    }

    // Highlight the current page in the header menu
    const activePage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.menu a').forEach(link => {
        if (link.getAttribute('href') === activePage) {
            link.classList.add('active');
        }
    });
});
