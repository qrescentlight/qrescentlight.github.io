window.onscroll = window.onload = window.onmousemove = document.onscroll = document.onload = document.onmousemove = function () {
    checkTop();
}

function checkTop() {

    var about = document.getElementById("about");
    var bounding = about.getBoundingClientRect();

    var artblock = document.getElementById("artistBlock");
    var artbound = artblock.getBoundingClientRect();

    var work = document.getElementById("projects");
    var workbound = work.getBoundingClientRect();


    var contact = document.getElementById("contact");
    var contbound = contact.getBoundingClientRect();

    var page = document.querySelector("html");

    var skills = document.getElementById("moreSkills");

    var nav = document.querySelector("nav");

    // var scrollBar = document.querySelector

    // console.log(artbound);
    if (bounding.top <= 0 + (window.innerHeight * 0.50) && workbound.top >= 0 + (window.innerHeight * 0.30)) {
        skills.style.backgroundColor = "#0A214C"
        // skills.style.left = "-14vw"
        skills.style.marginLeft = "0vw"

    } else {
        skills.style.left = "-14vw"
        skills.style.marginLeft = "-3vw"
        skills.style.backgroundColor = "#0A214C"
        setTimeout(() => {
            skillBtn.style.backgroundColor = "";
        }, 1000);
    }




    if (skillBtn.getBoundingClientRect().right <= 0) {
        skillBtn.style.backgroundColor = "";
        skillBtn.style.color = "";
    }

    if (workbound.top <= 0 ) {
        // if (workbound.top <= 0 + (window.innerHeight * 0.30)) {
        about.style.background = "#0A214C";
        work.style.backgroundColor = "#0A214C";
        page.style.scrollbarColor = "wheat #0A214C";
        // nav.style.mixBlendMode = "exclusion"
        // nav.style.color = "white"
        document.querySelector("body").className = "elder";

    } else {
        about.style.background = "whitesmoke"
        work.style.backgroundColor = "whitesmoke"
        page.style.scrollbarColor = "black whitesmoke";
        // nav.style.mixBlendMode = "normal"
        // nav.style.color = "white"
        document.querySelector("body").className = "scroll";
    }

}

function showSkills() {
    var skill = document.getElementById("moreSkills");
    var skillBound = skill.getBoundingClientRect();
    // var skillBtn = skill.firstElementChild;
    var skillBtn = document.getElementById("skillBtn");


    if (skillBound.right <= 0) {
        skill.style.left = "0vw";
        skillBtn.style.backgroundColor = "inherit";
        skillBtn.style.color = "inherit";

    } else if (skillBound.right >= 0) {
        skill.style.left = "-14vw";
        setTimeout(() => {
            skillBtn.style.backgroundColor = "";
            skillBtn.style.color = "";
        }, 1000);
    } else if (skillBtn.getBoundingClientRect().right <= 0) {
        setTimeout(() => {
            skillBtn.style.backgroundColor = "";
            skillBtn.style.color = "";
        }, 1000);

    }
}
// checkTop();