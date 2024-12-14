// JavaScript for handling dropdown menus and mobile menu toggle

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdownLinks = document.querySelectorAll('.dropdown > a');
  
    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    // Toggle dropdown menus
    dropdownLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdownMenu = link.nextElementSibling;
        dropdownMenu.classList.toggle('active');
  
        // Close other dropdown menus
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          if (menu !== dropdownMenu) {
            menu.classList.remove('active');
          }
        });
      });
    });
  });
  