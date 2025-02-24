document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("nav-toggle");
    const navBar = document.getElementById("nav-bar");
    const sections = document.querySelector(".sections");
    const navButtons = document.querySelectorAll(".nav-button");

    // Default olaraq ilk bölməni göstər
    document.querySelector("#orders").classList.add("active");

    // Navbar açılıb-bağlananda ölçünü dəyiş
    navToggle.addEventListener("change", function () {
        navBar.classList.toggle("collapsed");
        sections.classList.toggle("full-width");
    });

    // Nav button-lara klik edildikdə section dəyiş
    navButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Bütün section-ları gizlət
            document.querySelectorAll("section").forEach(section => {
                section.classList.remove("active");
            });

            // Klik olunan button-a uyğun section-u göstər
            const sectionId = button.id;
            const targetSection = document.querySelector(`#${sectionId}`);
            if (targetSection) {
                targetSection.classList.add("active");
                console.log(helldld);
                
            }
        });
    });
});
