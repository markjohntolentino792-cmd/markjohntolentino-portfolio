
// Mobile navigation menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const yearElement = document.getElementById("year");

function setMenuState(isOpen) {
    if (!navLinks || !menuBtn) return;
    navLinks.classList.toggle("show", isOpen);
    menuBtn.setAttribute("aria-expanded", String(isOpen));
}

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function() {
        const isOpen = !navLinks.classList.contains("show");
        setMenuState(isOpen);
    });

    // Close menu after selecting a section
    navLinks.querySelectorAll("a").forEach(function(link) {
        link.addEventListener("click", function() {
            setMenuState(false);
        });
    });

    window.addEventListener("resize", function() {
        if (window.innerWidth > 768) {
            setMenuState(false);
        }
    });
}

// Automatically update copyright year
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
