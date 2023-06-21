// ======= nav bar =================
const navbarMenu = document.getElementById("navbar");
const burgerMenu = document.getElementById("burger");
const overlayMenu = document.querySelector(".overlay");

const toggleMenu = () => {
    navbarMenu.classList.toggle("active");
    overlayMenu.classList.toggle("active");
};

const collapseSubMenu = () => {
    navbarMenu
        .querySelector(".menu-dropdown.active .submenu")
        .removeAttribute("style");
    navbarMenu.querySelector(".menu-dropdown.active").classList.remove("active");
};

const toggleSubMenu = (e) => {
    if (e.target.hasAttribute("data-toggle") && window.innerWidth <= 1024) {
        e.preventDefault();
        const menuDropdown = e.target.parentElement;

        if (menuDropdown.classList.contains("active")) {
            collapseSubMenu();
        } else {
            if (navbarMenu.querySelector(".menu-dropdown.active")) {
                collapseSubMenu();
            }

            menuDropdown.classList.add("active");
            const subMenu = menuDropdown.querySelector(".submenu");
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
    }
};

const resizeWindow = () => {
    if (window.innerWidth > 1024) {
        if (navbarMenu.classList.contains("active")) {
            toggleMenu();
        }
        if (navbarMenu.querySelector(".menu-dropdown.active")) {
            collapseSubMenu();
        }
    }
};


burgerMenu.addEventListener("click", toggleMenu);
overlayMenu.addEventListener("click", toggleMenu);
navbarMenu.addEventListener("click", toggleSubMenu);
window.addEventListener("resize", resizeWindow);
// ======= end van bar =================

// ======= user list =================

function toggleList() {
    const toggleList = document.querySelector(".user__list");
    toggleList.classList.toggle("show");
}
document.onclick = function (e) {
    if (!toggleList.contains("show")) {
        toggleList.classList.remove("show");
    }
}
// ======= end user list =================





// ======= Scroll-to-top =================
const scrollToTopButton = document.getElementById('js-top');
const scrollToTopChat = document.getElementById('js-topp');

const scrollChat = () => {
    let y = window.scrollY;
    if (y > 0) {
        scrollToTopChat.className = "chat_toTop show";
    } else {
        scrollToTopChat.className = "chat_toTop hide";
    }
};
const scrollFunc = () => {
    let y = window.scrollY;
    if (y > 0) {
        scrollToTopButton.className = "arrow_toTop show";
    } else {
        scrollToTopButton.className = "arrow_toTop hide";
    }
};
window.addEventListener("scroll", scrollChat);
window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 10);
    }
};

scrollToTopButton.onclick = function (e) {
    e.preventDefault();
    scrollToTop();
}
// ======= end Scroll-to-top =================



