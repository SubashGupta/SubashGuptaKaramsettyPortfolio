document.addEventListener("DOMContentLoaded", function () {
    function scrollings(idvalue) {
        const element = document.getElementById(idvalue);
        element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        });
    }

    function navTo(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        scrollings(targetId);
    }

    var skillsLink = document.querySelector('a[href="#skills"]');
    if (skillsLink) {
        skillsLink.addEventListener('click', navTo);
    }

    var projectsLink = document.querySelector('a[href="#projects"]');
    if (projectsLink) {
         projectsLink.addEventListener('click', navTo);
    }

    var projectsLink = document.querySelector('a[href="#abouts"]');
    if (projectsLink) {
         projectsLink.addEventListener('click', navTo);
    }

    var experienceLink = document.querySelector('a[href="#experience"]');
    if (experienceLink) {
        experienceLink.addEventListener('click', navTo);
    }
    
    var experienceLink = document.querySelector('a[href="#awards1"]');
    if (experienceLink) {
        experienceLink.addEventListener('click', navTo);
    }
    var experienceLink = document.querySelector('a[href="#contacts"]');
    if (experienceLink) {
        experienceLink.addEventListener('click', navTo);
    }
    var experienceLink = document.querySelector('a[href="#top"]');
    if (experienceLink) {
        experienceLink.addEventListener('click', navTo);
    }
});
