document.addEventListener("DOMContentLoaded", function () {
  const mangas = [
    { titulo: "Naruto 1", imagen_url: "img/naruto.jpg", precio: "7.99", id: 1  },
    { titulo: "One Piece 1", imagen_url: "img/onepiece.jpg", precio: "6.99", id: 3 },
    { titulo: "Bleach 1", imagen_url: "img/bleach.jpg", precio: "7.99", id: 2  },
    { titulo: "Attack on Titan 1", imagen_url: "img/aot.jpg", precio: "7.99", id: 4  },
    { titulo: "My Hero Academia 1", imagen_url: "img/mha.jpg", precio: "8.99", id: 5  },
    { titulo: "Dragon Ball Super 1", imagen_url: "img/dbs.jpg", precio: "8.50", id: 8  },
    { titulo: "Tokyo Ghou 1", imagen_url: "img/tokyoghoul.jpg", precio: "8.50", id: 6  },
    { titulo: "Death Note 1", imagen_url: "img/deathnote.jpg", precio: "9.95", id: 7 },
  ];

  const carouselInner = document.querySelector(".carousel-inner");
  let isFirstItem = true;
  for (let i = 0; i < mangas.length; i += 4) {
    const carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item";
    if (isFirstItem) {
      carouselItem.classList.add("active");
      isFirstItem = false;
    }

    carouselItem.innerHTML = mangas
      .slice(i, i + 4)
      .map(
        (manga) => `
    <div class="col-md-3">
        <div class="card">
            <img src="${manga.imagen_url}" class="card-img-top" alt="${manga.titulo}">
            <div class="card-body">
                <h5 class="card-title">${manga.titulo}</h5>
                <a href="content.html?volume=${manga.id}" class="btn btn-primary ml-auto">Info</a>
            </div>
        </div>
    </div>
`
      )
      .join("");

    carouselInner.appendChild(carouselItem);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const mangas = [
    { titulo: "My Hero Academia 1", imagen_url: "img/mha.jpg", precio: "8.99", id: 5 },
    { titulo: "Dragon Ball Super 1", imagen_url: "img/dbs.jpg", precio: "8.50", id: 8  },
    { titulo: "Tokyo Ghoul 1", imagen_url: "img/tokyoghoul.jpg", precio: "8.50", id: 6  },
    { titulo: "Death Note 1", imagen_url: "img/deathnote.jpg", precio: "9.95", id: 7  },
    { titulo: "Naruto 1", imagen_url: "img/naruto.jpg", precio: "7.99", id: 1  },
    { titulo: "One Piece 1", imagen_url: "img/onepiece.jpg", precio: "6.99", id: 3  },
    { titulo: "Bleach 1", imagen_url: "img/bleach.jpg", precio: "7.99", id: 2  },
    { titulo: "Attack on Titan 1", imagen_url: "img/aot.jpg", precio: "7.99", id: 4  },
  ];
  const secondCarousel = document.querySelector(
    "#secondCarouselItemsContainer"
  );
  let isFirstItem = true;
  for (let i = 0; i < mangas.length; i += 4) {
    const carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item";
    if (isFirstItem) {
      carouselItem.classList.add("active");
      isFirstItem = false;
    }

    carouselItem.innerHTML = mangas
      .slice(i, i + 4)
      .map(
        (manga) => `
    <div class="col-md-3">
        <div class="card">
            <img src="${manga.imagen_url}" class="card-img-top" alt="${manga.titulo}">
            <div class="card-body">
                <h5 class="card-title">${manga.titulo}</h5>
                <a href="content.html?volume=${manga.id}" class="btn btn-primary ml-auto">Info</a>
            </div>
        </div>
    </div>
`
      )
      .join("");

    secondCarousel.appendChild(carouselItem);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const mangas = [
    { titulo: "Tokyo Ghoul 1", imagen_url: "img/tokyoghoul.jpg", precio: "8.50", id: 6 },
    { titulo: "Death Note 1", imagen_url: "img/deathnote.jpg", precio: "9.95", id: 8 },
    { titulo: "My Hero Academia 1", imagen_url: "img/mha.jpg", precio: "8.99", id: 5 },
    { titulo: "Dragon Ball Super 1", imagen_url: "img/dbs.jpg", precio: "8.50", id: 7 },
    { titulo: "Naruto 1", imagen_url: "img/naruto.jpg", precio: "7.99", id: 1 },
    { titulo: "One Piece 1", imagen_url: "img/onepiece.jpg", precio: "6.99", id: 3 },
    { titulo: "Bleach 1", imagen_url: "img/bleach.jpg", precio: "7.99", id: 2 },
    { titulo: "Attack on Titan 1", imagen_url: "img/aot.jpg", precio: "7.99", id: 4 }
  ];
  const threeCarousel = document.querySelector("#threeCarouselItemsContainer");
  let isFirstItem = true;
  for (let i = 0; i < mangas.length; i += 2) {
    const carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item";
    if (isFirstItem) {
      carouselItem.classList.add("active");
      isFirstItem = false;
    }

    carouselItem.innerHTML = mangas
      .slice(i, i + 2)
      .map(
        (manga) => `
    <div class="col-md-6">
        <div class="card">
            <img src="${manga.imagen_url}" class="card-img-top" alt="${manga.titulo}">
            <div class="card-body">
                <h5 class="card-title">${manga.titulo}</h5>
                <a href="content.html?volume=${manga.id}" class="btn btn-primary ml-auto">Info</a>
            </div>
        </div>
    </div>
`
      )
      .join("");

    threeCarousel.appendChild(carouselItem);
  }
});


