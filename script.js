document.addEventListener('DOMContentLoaded', function () {
    var menu = document.getElementById('menu');
    var navbar = document.querySelector('.navbar');
    var menuItems = navbar.querySelectorAll('a'); // Select all anchor tags within navbar

    // Function to toggle the menu
    function toggleMenu() {
        navbar.classList.toggle('active');
    }

    // Event listener for menu icon click
    menu.addEventListener('click', toggleMenu);

    // Add click event to each menu item
    menuItems.forEach(function (item) {
        item.addEventListener('click', function() {
            // Remove 'active' class from all menu items
            menuItems.forEach(function(link) {
                link.classList.remove('active');
            });

            // Add 'active' class to clicked menu item
            this.classList.add('active');

            // Close the navbar if it's open
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
            }
        });
    });

    // Function to update active menu item based on scroll position
    function updateActiveMenuItem() {
        var scrollPosition = window.scrollY + window.innerHeight / 2; // Update

        menuItems.forEach(function(item) {
            var section = document.querySelector(item.getAttribute('href'));
            if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                menuItems.forEach(function(link) {
                    link.classList.remove('active');
                });
                item.classList.add('active');
            }
        });
    }

    // Event listener for window scroll
    window.addEventListener('scroll', updateActiveMenuItem);
});

// Initialize Typed.js
if (window.Typed) {
    var typed = new Typed('.textline', {
        strings: ["Frontend Developer"],
        typeSpeed: 150,  // Slower typing speed
        backSpeed: 150,  // Slower backspacing speed
        backDelay: 2000, // Delay before backspacing
        loop: true
    });
} else {
    console.error("Typed.js not loaded");
}

// ... any additional code ...
