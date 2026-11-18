
const profileCoin = document.getElementById("profileCoin");

profileCoin.addEventListener("click", () => {
    profileCoin.classList.toggle("flipped");
});

/* =================================
   PREMIUM SCROLL REVEAL
================================= */

document.addEventListener("DOMContentLoaded", () => {

    const revealElements = document.querySelectorAll(
        ".content-section, .education-card, .skill-card, .featured-project, .record-card, #contact"
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });

    // Stagger cards inside their groups
    document.querySelectorAll(
        ".skills-grid, .records-grid"
    ).forEach((grid) => {

        grid.querySelectorAll(
            ".skill-card, .record-card"
        ).forEach((card, index) => {

            card.classList.add("reveal");

            if (index < 3) {
                card.classList.add(
                    `reveal-delay-${index + 1}`
                );
            }
        });
    });

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });

    document.querySelectorAll(".skill-card, .record-card").forEach((card) => {
        observer.observe(card);
    });

});
// RESET SCROLL POSITION ON PAGE LOAD

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("pageshow", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
    });
});
// SMOOTH NAVIGATION SCROLL
document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(
        '.nav-links a, .hero-buttons a'
    );

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) return;

            const target = document.getElementById(targetId.substring(1));

            if (!target) return;

            e.preventDefault();

            const navbar = document.querySelector(".navbar");
            const navbarHeight = navbar ? navbar.offsetHeight : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });

});