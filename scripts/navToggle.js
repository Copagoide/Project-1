const navToggle = document.querySelector('#navToggle');
const navbar = document.querySelector('#navbar');
const navIcon = document.querySelectorAll('.navIcon');
const bars = document.querySelector('#bars');

navToggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
    navIcon.forEach(icon => {
        icon.classList.toggle('hidden');
    });
});

window.addEventListener('resize', () => {
    if(document.body.clientWidth > 720){
        navbar.classList.remove('open');
        navIcon.forEach(icon => {
            icon.classList.add('hidden')
        });
        bars.classList.remove('hidden')
    }
})

const pagesButton = document.querySelector('#pagesButton');
const pages = document.querySelector('#pages');

pagesButton.addEventListener('click', () => {
    pages.classList.toggle('pagesOpen');
})

// WHEN THE USER SENDS FEEDBACK OR SIGNS UP:
const messageSent = document.querySelector('#messageSent');

messageSent.addEventListener('click', () => {
    alert('The information has been sent and received. Thank you.');
})