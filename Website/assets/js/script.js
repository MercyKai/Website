const mobileMenu = document.getElementById('dropdown');
const navList = document.querySelector('.nav-bar');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});
