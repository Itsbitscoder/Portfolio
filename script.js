var typed = new Typed(".text", {
    strings: ["Web Devloper", "Front-end Devloper", "Back-end Devloper", "Full Stack Devloper"],
    typeSpeed: 100,
    backspeed: 100,
    backDelay: 2000,
    loop: true
});

const bx = document.querySelector('.icon')
const cros = document.querySelector('.icon i')
const navbar2 = document.querySelector('.navbar-2')

bx.onclick = function () {
    navbar2.classList.toggle('open')

    const isopen = navbar2.classList.contains('open')

    cros.classList = isopen
        ? 'fa-solid fa-xmark bx-menu'
        : 'fa-solid fa-bars bx-menu'
}
