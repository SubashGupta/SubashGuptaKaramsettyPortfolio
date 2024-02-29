document.addEventListener("DOMContentLoaded", function(){
    function scrollings(idvalue){
        const element = document.getElementById(idvalue);
        if (element){
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    function navToSkills(event) {
        event.preventDefault();
        history.pushState({}, null, '#skills');
        scrollings('skills');
    }

    var skillsLink = document.getElementById("skills");
    if (skillsLink) {
        skillsLink.addEventListener('click', navToSkills);
    }
});
