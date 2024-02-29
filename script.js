document.addEventListener("DOMContentLoaded", function(){
    function scrollings(idvalue){
        const element = document.getElementById(idvalue);
        if (element){
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    function navTo(event) {
        event.preventDefault();
        history.pushState({}, null, '#'+event);
        scrollings(event);
    }

    var idname = document.getElementById("skills");
    if (idname) {
        idname.addEventListener('click', navTo(idname));
    }
    var idname = document.getElementById("projects");
    if (idname) {
        idname.addEventListener('click', navTo(idname));
    }
    var idname = document.getElementById("experience");
    if (idname) {
        idname.addEventListener('click', navTo(idname));
    }
});
