document.querySelectorAll('.scroll-link' , ).forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    })
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove 'active' class from all links
            navLinks.forEach(navLink => navLink.classList.remove('ctv-nv-lmnts'));

            // Add 'active' class to the clicked link
            this.classList.add('ctv-nv-lmnts');
            
            // Scroll to the corresponding section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
