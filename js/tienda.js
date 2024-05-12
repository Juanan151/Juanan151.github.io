// scripts.js

const products = [
  {
    id: 4,
    name: "Attack on Titan 1",
    price: 10.99,
    demographics: "Shonen",
    genres: ["aventura", "fantasía"],
    image: "img/aot.jpg",
  },
  {
    id: 1,
    name: "Naruto 1",
    price: 9.99,
    demographics: "Shonen",
    genres: ["aventura", "fantasía"],
    image: "img/naruto.jpg",
  },
  {
    id: 3,
    name: "One Piece 1",
    price: 9.99,
    demographics: "Shonen",
    genres: ["aventura", "acción"],
    image: "img/onepiece.jpg",
  },
  {
    id: 5,
    name: "Hero Academia 1",
    price: 8.99,
    demographics: "Shojo",
    genres: ["acción", "superhéroes"],
    image: "img/mha.jpg",
  },
  {
    id: 2,
    name: "Bleach 1",
    price: 9.49,
    demographics: "Shonen",
    genres: ["aventura", "fantasía"],
    image: "img/bleach.jpg",
  },
  {
    id: 8,
    name: "Death Note 1",
    price: 9.99,
    demographics: "Seinen",
    genres: ["misterio", "sobrenatural"],
    image: "img/deathnote.jpg",
  },
  {
    id: 7,
    name: "Dragon Ball Super 1",
    price: 9.99,
    demographics: "Shonen",
    genres: ["acción", "aventura"],
    image: "img/dbs.jpg",
  },
  {
    id: 6,
    name: "Tokyo Ghoul 1",
    price: 9.99,
    demographics: "Seinen",
    genres: ["horror", "sobrenatural"],
    image: "img/tokyoghoul.jpg",
  },
];

document
  .querySelector(".product-container")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("add-to-cart-btn")) {
      const button = event.target;
      const id = button.dataset.id;
      const name = button.dataset.name;
      const price = button.dataset.price;
      const image = button.dataset.image;
      addToCart(id, name, parseFloat(price), image);
    }
  });

function renderProducts(products) {
  const container = document.querySelector(".product-container");
  container.innerHTML = ""; // Limpia el contenedor antes de añadir productos filtrados

  let row = document.createElement("div");
  row.className = "row product-row";
  container.appendChild(row);

  products.forEach((product, index) => {
    if (index % 3 === 0 && index !== 0) {
      // Crea una nueva fila cada tres productos, excepto para el primer producto
      row = document.createElement("div");
      row.className = "row product-row";
      container.appendChild(row);
    }

    const productCard = document.createElement("div");
    productCard.className = "col-md-4 ";
    productCard.innerHTML = `
      <div class="card">
        <img src="${product.image}" class="card-img-top" alt="${product.name}" />
        <style="margin: 0px;>
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">Precio: ${product.price}€</p>
          <div class="button-container">
          <a href="content.html?volume=${product.id}" class="btn btn-primary">Info</a>
          <button class="btn btn-success add-to-cart-btn" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">
            Añadir al carrito
          </button>
          </div>
        </div>
      </div>
    `;
    row.appendChild(productCard);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderProducts(products);
});

function applyFilters() {
  const selectedDemographics = Array.from(
    document.querySelectorAll(
      '.filter-demographics input[type="checkbox"]:checked'
    )
  ).map((el) => el.id);
  const selectedGenres = Array.from(
    document.querySelectorAll('.filter-genres input[type="checkbox"]:checked')
  ).map((el) => el.id);

  const filteredProducts = products.filter(
    (product) =>
      (selectedDemographics.length === 0 ||
        selectedDemographics.includes(product.demographics.toLowerCase())) &&
      (selectedGenres.length === 0 ||
        product.genres.some((genre) =>
          selectedGenres.includes(genre.toLowerCase())
        ))
  );

  renderProducts(filteredProducts);
}

document
  .querySelectorAll(".filter-genres input, .filter-demographics input")
  .forEach((input) => {
    input.addEventListener("change", applyFilters);
  });

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get("search");

  if (searchQuery) {
    filterBooks(searchQuery.toLowerCase());
  } else {
    renderProducts(products); // Renderiza todos los productos si no hay parámetro de búsqueda
  }
});

function filterBooks(searchQuery) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  renderProducts(filteredProducts);
}
