// Add an event listener to scroll
window.addEventListener("scroll", function() {
    // Get all sections
    const sections = document.querySelectorAll("section");

    // Get the current scroll position
    let scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Check if the section is in view
        if (scrollPosition >= sectionTop - window.innerHeight / 2 && scrollPosition < sectionTop + sectionHeight - window.innerHeight / 2) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });
});
