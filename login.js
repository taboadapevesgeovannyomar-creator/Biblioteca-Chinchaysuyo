document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value;
    const mensaje = document.getElementById("mensaje");


    // ==============================
    // ACCESO ESTUDIANTE
    // ==============================

    if (usuario === "estudiante" && password === "chinchaysuyo") {

        window.location.href = "estudiantes.html";

        return;
    }


    // ==============================
    // ACCESO ADMINISTRADOR
    // ==============================

    if (usuario === "admin" && password === "admin") {

        window.location.href = "Biblioteca.html";

        return;
    }


    // ==============================
    // DATOS INCORRECTOS
    // ==============================

    mensaje.textContent = "❌ Usuario o contraseña incorrectos";

}); 