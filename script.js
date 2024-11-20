document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeButton = document.getElementById("toggle-theme");

    function updateThemeIcon() {
        const isDarkMode = document.documentElement.classList.contains("dark");
        toggleThemeButton.innerText = isDarkMode ? "brightness_7" : "brightness_4";
    }

    // Cambiar entre temas al hacer clic en el botón
    toggleThemeButton.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
        localStorage.setItem("theme", currentTheme);
        updateThemeIcon();
    });

    // Aplicar el tema guardado al cargar la página
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.add(savedTheme);
    updateThemeIcon();

    // Verifica el tema cargado
    console.log(`Tema cargado: ${savedTheme}`);
});



//Menu desplegable
// Selecciona el botón de menú y el menú de navegación
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// Función para alternar la visibilidad del menú en móvil
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
});

// Función para mostrar el menú automáticamente en pantallas grandes
window.addEventListener("resize", () => {
    if (window.innerWidth >= 640) { // 640px es el punto de quiebre 'sm' en Tailwind
        navMenu.classList.remove("hidden"); // Muestra el menú en pantallas grandes
    }
});

// Asegúrate de que el menú esté visible por defecto si se carga en pantallas grandes
if (window.innerWidth >= 640) {
    navMenu.classList.remove("hidden");
}


const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

document.querySelector('#darkModeToggle').addEventListener('click', toggleDarkMode);