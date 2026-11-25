
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    const aberto = navLinks.classList.toggle("active");

    menuButton.setAttribute("aria-expanded", aberto);

    menuButton.textContent = aberto ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.textContent = "☰";
    });

});

document.querySelector("#year").textContent =
    new Date().getFullYear();
