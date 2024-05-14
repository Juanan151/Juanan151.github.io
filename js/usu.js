document.getElementById("user-icon").addEventListener("click", function () {
  const popup = document.getElementById("user-popup");
  popup.style.display = popup.style.display === "block" ? "none" : "block"; // Alternar la visibilidad
});

document
  .getElementById("user-popup")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Evita que clics dentro del popup cierren el mismo
  });

document
  .getElementById("user-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    if (username) {
      localStorage.setItem("username", username); // Guardar el nombre en localStorage
      updateUserNameDisplay(); // Actualizar la visualización del nombre
    }
  });

function updateUserNameDisplay() {
  const username = localStorage.getItem("username");
  if (username) {
    const popup = document.getElementById("user-popup");
    popup.innerHTML = `<p>Hola, ${username}</p>`; // Mostrar el nombre en el popup
  }
}



function updateLoginDisplay() {
  const userPopup = document.getElementById("user-popup");
  userPopup.innerHTML = `
        <form id="user-form">
            <div>
                <label for="username">Nombre:</label>
                <input type="text" id="username" name="username">
            </div>
            <button type="submit">Guardar</button>
        </form>
        <button id="logout-button" style="margin-top: 10px;">Cerrar sesión</button>
    `; // Restablece el formulario original
  document
    .getElementById("user-form")
    .addEventListener("submit", handleUserFormSubmit); // Reasigna el controlador del evento del formulario
  document
    .getElementById("logout-button")
    .addEventListener("click", function () {
      localStorage.removeItem("username");
      alert("Has cerrado sesión correctamente.");
      updateLoginDisplay();
    }); // Reasigna el manejador del evento del botón de cierre de sesión
}

function closePopup() {
  const popup = document.getElementById("user-popup");
  popup.style.display = "none";
}

document
  .getElementById("user-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    if (username.trim() !== "") {
      localStorage.setItem("username", username); // Guardar el nombre en localStorage
      updateUserNameDisplay(); // Actualizar la visualización del nombre
    }
  });

function updateUserNameDisplay() {
  const username = localStorage.getItem("username");
  const popup = document.getElementById("user-popup");
  if (username) {
    popup.innerHTML = `<p>Hola, ${username}</p>
                         <button id="logout-button">Cerrar sesión</button>`;
    document
      .getElementById("logout-button")
      .addEventListener("click", function () {
        localStorage.removeItem("username"); // Limpiar el almacenamiento local
        updateLoginDisplay(); // Actualiza la interfaz para solicitar el nombre nuevamente
      });
  } else {
    updateLoginDisplay(); // Si no hay nombre guardado, mostrar el formulario
  }
}

function updateLoginDisplay() {
  const userPopup = document.getElementById("user-popup");
  userPopup.innerHTML = `
      <form id="user-form">
          <div>
              <label for="username">Nombre:</label>
              <input type="text" id="username" name="username">
          </div>
          <div>
              <label for="password">Contraseña:</label>
              <input type="text" id="password" name="password">
          </div>
          <button type="submit">Guardar</button>

      </form>
      
  `;
  document
    .getElementById("user-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      if (username.trim() !== "") {
        localStorage.setItem("username", username);
        updateUserNameDisplay();
      }
    });
  document
    .getElementById("logout-button")
    .addEventListener("click", function () {
      localStorage.removeItem("username");
      updateLoginDisplay();
    });
}

document.addEventListener('DOMContentLoaded', () => {
  const mangaButton = document.getElementById('navbarDropdown');
  mangaButton.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown-menu')) {
      window.location.href = 'tienda.html';
    }
  });
});