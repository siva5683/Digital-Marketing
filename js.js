// ==============================
// NAV TOGGLE FOR MOBILE
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".toggle-btn button");
    const collapseMenu = document.querySelector(".collapse");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            collapseMenu.classList.toggle("active");
        });
    }
});

// ==============================
// RELAX PARALLAX INITIALIZATION
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    if (typeof Rellax !== "undefined") {
        new Rellax('.rellax', {
            speed: -2,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
    }
});

// ==============================
// MASONRY LAYOUT FOR RECENT WORK
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    if (typeof Masonry !== "undefined") {
        const grid = document.querySelector(".images-flex");
        if (grid) {
            new Masonry(grid, {
                itemSelector: ".flex-item",
                columnWidth: ".flex-item",
                percentPosition: true
            });
        }
    }
});

// ==============================
// SCROLL ANIMATION TRIGGER
// ==============================
function animateOnScroll() {
    const animatedElements = document.querySelectorAll(".animate__animated");
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("animate__fadeInUp");
        }
    });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

// ==============================
// NEWSLETTER SUBSCRIBE DEMO
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    const subscribeBtn = document.querySelector(".btn-go");
    const subscribeInput = document.querySelector(".subscribe-text");

    if (subscribeBtn && subscribeInput) {
        subscribeBtn.addEventListener("click", () => {
            const email = subscribeInput.value.trim();
            if (email === "") {
                alert("Please enter your email address.");
            } else if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
            } else {
                alert(`Thanks for subscribing, ${email}!`);
                subscribeInput.value = "";
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }
});