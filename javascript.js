/* ===== Highlight Active Page in Navigation ===== */
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.style.textDecoration = "underline";
            link.style.color = "#ffd700"; // highlight active page
            link.style.fontWeight = "bold";
        }
    });
});

/* ===== Simple Mobile Menu Toggle (optional if you add menu button later) ===== */
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

/* ===== Contact Form Validation (optional) ===== */
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", (e) => {
        const name = form.querySelector("input[name='name']");
        const email = form.querySelector("input[name='email']");
        const message = form.querySelector("textarea[name='message']");

        if (!name.value || !email.value || !message.value) {
            alert("Please fill in all fields.");
            e.preventDefault();
        }
    });
}
