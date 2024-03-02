document.addEventListener("DOMContentLoaded", function () {
    function scrollings(idvalue) {
        const element = document.getElementById(idvalue);
        if (idvalue === "projects") {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        } else {
            element.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }

    function navTo(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        history.pushState({}, null, '#' + targetId);
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

    var experienceLink = document.querySelector('a[href="#contacts"]');
    if (experienceLink) {
        experienceLink.addEventListener('click', navTo);
    }
    var experienceLink = document.querySelector('a[href="#top"]');
    if (experienceLink) {
        experienceLink.addEventListener('click', navTo);
    }
});
