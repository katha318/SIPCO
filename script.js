const login = document.getElementById("login");
const logout = document.getElementById("logout");

login.addEventListener("click", function() {
    // Simula el inicio de sesión (puedes agregar tu lógica de inicio de sesión real aquí).
    const loggedIn = true;

    if (loggedIn) {
        // Mostrar opciones después de iniciar sesión.
        const hiddenItems = document.querySelectorAll(".hidden");
        hiddenItems.forEach(item => item.style.display = "list-item");
        login.style.display = "none";
        logout.style.display = "list-item";
    }
});

logout.addEventListener("click", function() {
    // Simula el cierre de sesión (puedes agregar tu lógica de cierre de sesión real aquí).
    // Oculta las opciones después de cerrar sesión.
    const hiddenItems = document.querySelectorAll(".hidden");
    hiddenItems.forEach(item => item.style.display = "none");
    login.style.display = "list-item";
    logout.style.display = "none";
});
