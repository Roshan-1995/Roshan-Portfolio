// Typing Animation

const words = [
    "QA Test Lead",
    "Salesforce Testing",
    "Manual QA Engineer",
    "Azure DevOps",
    "Certified: Salesforce AI Associate",
    "Platinum Club Member FY27"

];

let i = 0;
let j = 0;
let deleting = false;

function typeEffect() {

    let current = words[i];

    document.querySelector(".typing").textContent =
        current.substring(0, j);

    if (!deleting) {
        j++;

        if (j > current.length) {
            deleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        j--;

        if (j === 0) {
            deleting = false;
            i++;

            if (i === words.length) {
                i = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();


// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.dataset.target;
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {
            counter.innerText =
                Math.ceil(current + increment);

            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target + "+";
        }
    };

    updateCounter();
});


// Scroll Reveal

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll('.hidden').forEach(section => {
    observer.observe(section);
});


// Dark / Light Mode

const toggle =
document.getElementById("themeToggle");

const savedTheme =
localStorage.getItem("theme");

if(savedTheme==="light"){

document.body.classList.add("light-theme");
toggle.innerHTML="☀️";

}

toggle.addEventListener("click",()=>{

document.body.classList.toggle(
"light-theme"
);

const isLight=
document.body.classList.contains(
"light-theme"
);

if(isLight){

toggle.innerHTML="☀️";
localStorage.setItem("theme","light");

}else{

toggle.innerHTML="🌙";
localStorage.setItem("theme","dark");

}




});

function openBlog(blogId){
    document.getElementById(blogId).style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeBlog(blogId){
    document.getElementById(blogId).style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event){

    document.querySelectorAll(".modal").forEach(modal=>{

        if(event.target === modal){
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }

    });

};