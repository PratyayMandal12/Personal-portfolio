// ================= Smooth Scroll =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ================= Active Navbar =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ================= AOS =================

AOS.init({
    duration: 1000,
    once: true
});
// ================= Back To Top =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
// Typing Animation

var typed = new Typed("#typing", {
    strings: [
        "Frontend Developer",
        "Engineering Student",
        "Web Designer",
        "Programmer"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});
// Counter Animation

const counters = document.querySelectorAll(".counter-value");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if(current < target){

            counter.innerText = current + increment;

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});
window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});