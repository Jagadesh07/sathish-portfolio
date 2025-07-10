// nav-bar active link
const sections = document.querySelectorAll("section[id]");

function scrollTracker(){
    const currentYscroll = window.scrollY; 

    sections.forEach((section) => {
    const pageHeight = section.offsetHeight;
    const pageTop = section.offsetTop - 100;
    const id = section.getAttribute("id");
    const currentNavLink = document.querySelector(`.nav-bar a[href*="#${id}" i]`);
    if(currentYscroll > pageTop && currentYscroll <= pageTop + pageHeight){
        currentNavLink.classList.add("active");
    }else{
        currentNavLink.classList.remove("active");
    }
    });
}
window.addEventListener("scroll",scrollTracker);

// scroll-reveal

function revealFunction(){
    window.sr = ScrollReveal({
        duration:'500',distance: '50px',easing: 'ease-in',reset:true
    })
    sr.reveal('.slide-right',{origin:'left'})
    sr.reveal('.slide-left',{origin:'right'})
    sr.reveal('.slide-up',{origin:'bottom'})
    sr.reveal('.slide-down',{origin:'top'})

}

window.addEventListener('load',() => {
    revealFunction();
});

// darkmode

const darkMode = document.querySelector('.dark');
const lightMode = document.querySelector('.light');
let dark = false;

darkMode.addEventListener('click',() => {
    dark = true;
    darkMode.style.backgroundColor = 'black';
    darkMode.style.color = 'white';
    lightMode.style.backgroundColor = 'rgba(15, 15, 15, 0.11)';
    lightMode.style.color = 'white';
    setMode();
})
lightMode.addEventListener('click',() => {
    dark = false;
    lightMode.style.backgroundColor = 'white';
    lightMode.style.color = 'black';
    darkMode.style.backgroundColor = 'rgb(223, 234, 240)';
    darkMode.style.color = 'black';
    setMode();
})


let r = document.querySelector(':root');

function setMode(){
    if(dark){
    r.style.setProperty('--body-background','rgb(36, 36, 36)');
    r.style.setProperty('--text-color','white');
    r.style.setProperty('--highlight-color','rgb(29, 27, 27)');
    r.style.setProperty('--nav-background','rgba(15, 15, 15, 0.25)');
    r.style.setProperty('--nav-active','black');
}
else{
    r.style.setProperty('--body-background','rgb(235, 242, 245)');
    r.style.setProperty('--text-color','black');
    r.style.setProperty('--highlight-color','white');
    r.style.setProperty('--nav-background','rgb(223, 234, 240)');
    r.style.setProperty('--nav-active','white');
}
}
