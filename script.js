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
var words = ['Software Engineer', 'Python Developer', 'Fast Learner'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});