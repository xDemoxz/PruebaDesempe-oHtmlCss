const menuBtn = document.getElementById('menuBtn');
const navList = document.getElementById('navlist');

menuBtn.addEventListener('click', () => {
    // Alterna la clase "active" cada vez que haces clic
    navList.classList.toggle('active');
    
    // Opcional: cambia el icono de ☰ a ✕
    if (navList.classList.contains('active')) {
        menuBtn.innerHTML = '✕';
    } else {
        menuBtn.innerHTML = '☰';
    }
});

// Cerrar el menú automáticamente al hacer clic en un enlace
document.querySelectorAll('.nav__list a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        menuBtn.innerHTML = '☰';
    });
});