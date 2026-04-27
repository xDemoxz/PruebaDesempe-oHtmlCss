document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el salto brusco original

        const targetId = this.getAttribute('href'); // Obtiene el destino (ej: #events)
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Realiza el scroll de forma suave
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // OPCIONAL: Si el menú de hamburguesa está abierto, lo cierra al hacer click
            const navList = document.getElementById('navlist');
            const menuBtn = document.getElementById('menuBtn');
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                menuBtn.textContent = '☰';
            }
        }
    });
});