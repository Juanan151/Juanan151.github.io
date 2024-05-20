const products = [
  {
    id: 4,
    name: "Attack on Titan 1",
    price: 10.99,
    demographics: "Shonen",
    genres: ["aventura", "fantasía"],
    edicionLimitada: false,
    coleccionTerminada: false,
    oneShot: false,
    publicationDate: "2013-04-06",
    image: "img/aot.jpg",
  },
  {
    id: 1,
    name: "Naruto 1",
    price: 9.99,
    demographics: "Shonen",
    genres: ["aventura", "fantasía"],
    edicionLimitada: true,
    coleccionTerminada: true,
    oneShot: false,
    publicationDate: "2000-01-01",
    image: "img/naruto.jpg",
  },
  {
    id: 3,
    name: "One Piece 1",
    price: 9.99,
    demographics: "Shonen",
    genres: ["aventura", "acción"],
    edicionLimitada: false,
    coleccionTerminada: false,
    oneShot: false,
    publicationDate: "1997-07-22",
    image: "img/onepiece.jpg",
  },
  {
    id: 5,
    name: "Hero Academia 1",
    price: 8.99,
    demographics: "Shojo",
    genres: ["acción", "superhéroes"],
    edicionLimitada: false,
    coleccionTerminada: false,
    oneShot: false,
    publicationDate: "2014-11-20",
    image: "img/mha.jpg",
  },
  {
    id: 2,
    name: "Bleach 1",
    price: 9.49,
    demographics: "Shonen",
    genres: ["aventura", "fantasía"],
    edicionLimitada: false,
    coleccionTerminada: true,
    oneShot: false,
    publicationDate: "2001-08-07",
    image: "img/bleach.jpg",
  },
  {
    id: 8,
    name: "Death Note 1",
    price: 9.99,
    demographics: "Seinen",
    genres: ["misterio", "sobrenatural"],
    edicionLimitada: false,
    coleccionTerminada: true,
    oneShot: false,
    publicationDate: "2003-12-01",
    image: "img/deathnote.jpg",
  },
  {
    id: 7,
    name: "Dragon Ball Super 1",
    price: 9.99,
    demographics: "Shonen",
    genres: ["acción", "aventura"],
    edicionLimitada: false,
    coleccionTerminada: false,
    oneShot: false,
    publicationDate: "2015-06-20",
    image: "img/dbs.jpg",
  },
  {
    id: 6,
    name: "Tokyo Ghoul 1",
    price: 9.99,
    demographics: "Seinen",
    genres: ["horror", "sobrenatural"],
    edicionLimitada: false,
    coleccionTerminada: true,
    oneShot: false,
    publicationDate: "2011-09-08",
    image: "img/tokyoghoul.jpg",
  },
  {
    id: 9,
    name: "One Punch Man",
    price: 9.99,
    demographics: "Seinen",
    genres: ["acción", "comedia"],
    edicionLimitada: false,
    coleccionTerminada: false,
    oneShot: true,
    publicationDate: "2012-06-14",
    image: "img/onepunch.png",
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
          <button class="btn btn-three add-to-cart-btn" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}" style="margin-left: 10px;">
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
  const selectedGenres = Array.from(
    document.querySelectorAll('.filter-genres input[type="checkbox"]:checked')
  ).map((el) => el.id);

  let filteredProducts = products.filter(
    (product) =>
      selectedGenres.length === 0 ||
      product.genres.some((genre) =>
        selectedGenres.includes(genre.toLowerCase())
      )
  );

  renderProducts(filteredProducts);
}

document
  .querySelectorAll(".filter-genres input")
  .forEach((input) => {
    input.addEventListener("change", applyFilters);
  });

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get("search");
  const demographyQuery = urlParams.get("demography");
  const filterQuery = urlParams.get("filter");
  const genreQuery = urlParams.get("genre");

  if (searchQuery) {
    filterBooks(searchQuery.toLowerCase());
  } else if (demographyQuery) {
    filterByDemography(demographyQuery.toLowerCase());
  } else if (filterQuery) {
    filterByAttribute(filterQuery);
  } else if(genreQuery){
    filterByGenre(genreQuery);
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

function filterByDemography(demographyQuery) {
  const filteredProducts = products.filter(
    (product) => product.demographics.toLowerCase() === demographyQuery
  );

  renderProducts(filteredProducts);
}

function filterByAttribute(filterQuery) {
  const filteredProducts = products.filter((product) => {
    if (filterQuery === "edicionLimitada") {
      return product.edicionLimitada;
    } else if (filterQuery === "coleccionTerminada") {
      return product.coleccionTerminada;
    } else if (filterQuery === "oneShot") {
      return product.oneShot;
    }
    return false;
  });

  renderProducts(filteredProducts);
}

document.getElementById('sort-az').addEventListener('click', function() {
  const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
  renderProducts(sortedProducts);
});

document.getElementById('sort-price').addEventListener('click', function() {
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);
  renderProducts(sortedProducts);
});

document.getElementById('sort-date').addEventListener('click', function() {
  const sortedProducts = [...products].sort((a, b) => new Date(a.publicationDate) - new Date(b.publicationDate));
  renderProducts(sortedProducts);
});

function filterByGenre(genre) {
  const filteredProducts = products.filter(product =>
    product.genres.some(g => g.toLowerCase() === genre)
  );
  renderProducts(filteredProducts);
}

document.addEventListener('DOMContentLoaded', () => {

  // Actualizar las migas de pan según los filtros
  // Actualizar las migas de pan según los filtros
  const params = new URLSearchParams(window.location.search);
  const demography = params.get('demography');
  const filter = params.get('filter');
  const genre = params.get('genre');
  const search = params.get('search');

  if (demography) {
    document.getElementById('breadcrumb-current').textContent = demography.charAt(0).toUpperCase() + demography.slice(1);
  } else if (filter) {
    document.getElementById('breadcrumb-current').textContent = filter.charAt(0).toUpperCase() + filter.slice(1).replace(/([A-Z])/g, ' $1');
  } else if (genre) {
    document.getElementById('breadcrumb-current').textContent = genre.charAt(0).toUpperCase() + genre.slice(1);
  } else if (search) {
    document.getElementById('breadcrumb-current').textContent = search;
  } else {
    document.getElementById('breadcrumb-current').textContent = 'Manga';
  }
});