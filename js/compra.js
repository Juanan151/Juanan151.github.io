
document.getElementById("cart-btn").addEventListener("click", function () {
  var cartDropdown = document.querySelector(".cart-dropdown");
  toggleCartVisibility();
});

function addToCart(id, name, price, image) {
  const cartItems = document.querySelector(".cart-items");
  const newItem = document.createElement("li");
  newItem.innerHTML = `
        <img src="${image}" alt="${name}" style="width: 50px; height: auto;">
        <span>${name} - ${price.toFixed(2)}€</span>
        <button class="btn btn-danger remove-item-btn" data-id="${id}">Quitar</button>
    `;
  cartItems.appendChild(newItem);
  updateCartTotal();
  saveCartItems(); // Si estás usando Local Storage para guardar los ítems del carrito
  
}


function removeItemFromCart(event) {
  const buttonClicked = event.target;
  if (buttonClicked.classList.contains("remove-item-btn")) {
    buttonClicked.parentElement.remove();
    updateCartTotal();
    saveCartItems(); // Actualiza Local Storage después de eliminar un ítem
  }
}

document
  .querySelector(".cart-items")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-item-btn")) {
      event.target.parentElement.remove(); // Elimina el ítem del carrito
      updateCartTotal(); // Actualiza el total y el contador del carrito
    }
  });

function updateCartTotal() {
  let total = 0;
  const items = document.querySelectorAll(".cart-items li");
  items.forEach((item) => {
    const priceElement = item.querySelector("span").textContent;
    const price = parseFloat(priceElement.split(" - ")[1].replace("€", ""));
    total += price;
  });
  document.getElementById("cart-subtotal").textContent =
    `Total: ${total.toFixed(2)}€`;
  document.getElementById("cart-count").textContent = items.length; // Actualiza el contador del carrito
  saveCartItems(); // Si estás guardando el estado del carrito en Local Storage
}

function saveCartItems() {
  const items = [];
  document.querySelectorAll(".cart-items li").forEach((item) => {
    const imgSrc = item.querySelector("img").src;
    const textContent = item.querySelector("span").textContent;
    const [name, price] = textContent.split(" - ");
    items.push({ name, price: parseFloat(price), img: imgSrc });
  });
  localStorage.setItem("cartItems", JSON.stringify(items));
}

function toggleCartVisibility() {
  const cartDropdown = document.querySelector(".cart-dropdown");
  cartDropdown.style.display =
    cartDropdown.style.display === "none" || !cartDropdown.style.display
      ? "block"
      : "none";
}

window.addEventListener("scroll", adjustCartPosition);

function adjustCartPosition() {
  const cartDropdown = document.querySelector(".cart-dropdown");
  const footer = document.querySelector("footer"); // Asegúrate de seleccionar tu footer correctamente
  const footerRect = footer.getBoundingClientRect();
  const cartTop = parseInt(window.getComputedStyle(cartDropdown).top, 10);

  if (footerRect.top < window.innerHeight) {
    cartDropdown.style.bottom = window.innerHeight - footerRect.top + "px";
  } else {
    cartDropdown.style.bottom = "0";
  }
}

document.getElementById("go-to-checkout").addEventListener("click", function () {
  // Obtén un elemento que represente los ítems del carrito en tu página, por ejemplo
  const cartItemsContainer = document.querySelector(".cart-items");
  
  if (cartItemsContainer && cartItemsContainer.children.length > 0) {
    alert("Gracias por tu compra! Tu pedido ha sido completado, gracias a los datos de tu perfil.");
    cartItemsContainer.innerHTML = ''; // "Vacia" el carrito visualmente

    // Opcional: Actualiza cualquier otro elemento que muestre el estado del carrito
    document.getElementById("cart-subtotal").textContent = "0.00€";
    document.getElementById("cart-count").textContent = "0";
  } else {
    alert("Tu carrito está vacío.");
  }
});


