// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Cambiar tema
const toggleThemeButton = document.getElementById('toggle-theme');
if (toggleThemeButton) {
    // Inicializa el texto del botón según el tema actual
    if (document.body.classList.contains('dark-theme')) {
        toggleThemeButton.textContent = 'Cambiar a modo claro';
    } else {
        toggleThemeButton.textContent = 'Cambiar a modo oscuro';
    }

    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        // Cambia el texto del botón según el tema
        if (document.body.classList.contains('dark-theme')) {
            toggleThemeButton.textContent = 'Cambiar a modo claro'; // Muestra "Cambiar a modo claro" si está en modo oscuro
        } else {
            toggleThemeButton.textContent = 'Cambiar a modo oscuro'; // Muestra "Cambiar a modo oscuro" si está en modo claro
        }
    });
}

// Menú desplegable
const menuButton = document.getElementById('menu-button');
if (menuButton) {
    menuButton.addEventListener('click', () => {
        const nav = document.querySelector('nav');
        nav.classList.toggle('hidden'); // Agrega o quita la clase 'hidden'
    });
}