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
