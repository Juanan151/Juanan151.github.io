const volumeData = [
  {
    id: 1,
    title: "Naruto Vol. 1",
    coverImage: "img/naruto.jpg",
    synopsis:
      "En este primer volumen, Naruto Uzumaki enfrenta numerosos desafíos en su camino para convertirse en Hokage.",
    volumeNumber: 1,
    volumeDescription: "La prueba de la campana y la formación del Equipo 7.",
    isbn: "978-1569319000",
    price: "9.99€",
    publicationDate: "1999-03-21",
    genres: ["aventura", "fantasía"],
  },
  {
    id: 2,
    title: "Bleach Vol. 1",
    coverImage: "img/bleach.jpg",
    synopsis:
      "Ichigo Kurosaki es un adolescente con la habilidad de ver fantasmas, pero su vida cambia cuando adquiere los poderes de un Shinigami.",
    volumeNumber: 1,
    volumeDescription:
      "Ichigo se convierte en un Shinigami sustituto y aprende sobre los Hollows.",
    isbn: "978-1591164418",
    price: "9.99€",
    publicationDate: "2001-08-01",
    genres: ["aventura", "fantasía"],
  },
  {
    id: 3,
    title: "One Piece Vol. 1",
    coverImage: "img/onepiece.jpg",
    synopsis:
      "Monkey D. Luffy se embarca en un viaje para encontrar el legendario tesoro One Piece y proclamarse el Rey de los Piratas.",
    volumeNumber: 1,
    volumeDescription:
      "Luffy y su primer compañero, Zoro, buscan nuevos miembros para su tripulación.",
    isbn: "978-1421536255",
    price: "7.99€",
    publicationDate: "1997-07-22",
    genres: ["aventura", "acción"],
  },
  {
    id: 4,
    title: "Attack on Titan Vol. 1",
    coverImage: "img/aot.jpg",
    synopsis:
      "En un mundo asediado por titanes gigantes, los humanos viven en ciudades rodeadas por enormes muros para protegerse.",
    volumeNumber: 1,
    volumeDescription:
      "Eren Yeager jura vengar la destrucción de su hogar y la muerte de su madre a manos de los titanes.",
    isbn: "978-1612620244",
    price: "10.99€",
    publicationDate: "2009-03-17",
    genres: ["aventura", "fantasía"],
  },
  {
    id: 5,
    title: "My Hero Academia Vol. 1",
    coverImage: "img/mha.jpg",
    synopsis:
      "En un mundo donde casi todos tienen superpoderes, Izuku Midoriya sueña con convertirse en un héroe a pesar de no tener poderes.",
    volumeNumber: 1,
    volumeDescription:
      "Midoriya recibe el poder de su ídolo, All Might, y comienza su entrenamiento para ingresar a la U.A. High School.",
    isbn: "978-1421582696",
    price: "8.99€",
    publicationDate: "2014-07-03",
    genres: ["acción", "superhéroes"],
  },
  {
    id: 6,
    title: "Tokyo Ghoul Vol. 1",
    coverImage: "img/tokyoghoul.jpg",
    synopsis:
      "Kaneki se convierte en un híbrido humano-ghoul y debe aprender a vivir entre ambos mundos.",
    volumeNumber: 1,
    volumeDescription:
      "Kaneki lucha por mantener su humanidad mientras se adapta a su nueva vida como ghoul.",
    isbn: "978-1421580364",
    price: "9.99€",
    publicationDate: "2011-09-08",
    genres: ["horror", "sobrenatural"],
  },
  {
    id: 7,
    title: "Dragon Ball Super Vol. 1",
    coverImage: "img/dbs.jpg",
    synopsis:
      "En la saga de Dragon Ball Super, Goku y sus amigos se enfrentan a nuevas amenazas y descubren nuevos niveles de poder.",
    volumeNumber: 1,
    volumeDescription:
      "Goku y Vegeta entrenan para enfrentarse a los nuevos desafíos del universo.",
    isbn: "978-1421580364",
    price: "9.99€",
    publicationDate: "2015-06-20",
    genres: ["acción", "aventura"],
  },
  {
    id: 8,
    title: "Death Note Vol. 1",
    coverImage: "img/deathnote.jpg",
    synopsis:
      "Light Yagami encuentra un cuaderno con poderes para matar y comienza a usarlo para eliminar criminales.",
    volumeNumber: 1,
    volumeDescription:
      "Light se enfrenta a las consecuencias morales y a la persecución del detective L.",
    isbn: "978-1421501680",
    price: "8.99€",
    publicationDate: "2004-10-10",
    genres: ["misterio", "sobrenatural"],
  },
  {
    id: 9,
    title: "One Punch Man",
    coverImage: "img/onepunch.png",
    synopsis:
      "Saitama es un héroe que puede derrotar a cualquier oponente con un solo golpe, pero busca un verdadero desafío.",
    volumeNumber: 1,
    volumeDescription:
      "Saitama conoce a Genos y se une a la Asociación de Héroes.",
    isbn: "978-1421585642",
    price: "9.99€",
    publicationDate: "2012-06-14",
    genres: ["acción", "comedia"],
  },
];

const comments = [
  {
    user: "Ana Torres",
    vol: "Attack on Titan Vol. 1",
    text: "Nunca me imaginé que el último volumen de 'Attack on Titan' me atraparía tanto. La trama se despliega de una manera tan magistral que cada página te deja queriendo más. Realmente aprecio cómo se han desarrollado los personajes a lo largo de la serie, y este volumen no es una excepción.",
  },
  {
    user: "Carlos Ruiz",
    vol: "Tokyo Ghoul Vol. 1",
    text: "Sinceramente, este ha sido uno de los mejores volúmenes que he leído este año. La mezcla de misterio y acción es perfecta. Espero con ansias el próximo volumen, porque realmente quiero ver cómo el autor va a resolver los conflictos actuales.",
  },
  {
    user: "Lucía Hernández",
    vol: "Bleach Vol. 1",
    text: "Este volumen fue un poco lento comparado con los anteriores. Aunque entiendo la necesidad de desarrollar más la historia y dar profundidad a los personajes, me faltó un poco más de acción. No obstante, sigue siendo una serie que recomendaría ampliamente.",
  },
  {
    user: "Miguel Ángel López",
    vol: "One Piece Vol. 1",
    text: "¡Increíble! Cada nuevo volumen supera el anterior. La intensidad de la trama y el desarrollo continuo de los personajes hacen que esta serie sea imposible de dejar. Además, las ilustraciones son simplemente espectaculares, capturando perfectamente la emoción de cada escena.",
  },
  {
    user: "Laura Martínez",
    vol: "One Piece Vol. 1",
    text: "Estoy algo decepcionada con la dirección que ha tomado la trama en este último volumen. Parece que el autor está más interesado en prolongar la serie que en ofrecer resoluciones significativas a las líneas argumentales. Aunque la escritura sigue siendo de alta calidad, esperaba más.",
  },
  {
    user: "David Jiménez",
    vol: "Naruto Vol. 1",
    text: "¿Alguien más quedó asombrado con la revelación del capítulo cinco? No quiero dar spoilers, pero fue totalmente inesperado y cambió completamente mi percepción de varios personajes. ¡Necesito el próximo volumen ya!",
  },
  {
    user: "Sofía Gómez",
    vol: "Naruto Vol. 1",
    text: "Este volumen cerró maravillosamente bien varios arcos argumentales que habían estado en el aire durante mucho tiempo. Me siento completamente satisfecha con los giros que tomó la historia, aunque también un poco triste de que ciertos aspectos hayan concluido.",
  },
  {
    user: "Javier Fernández",
    vol: "Dragon Ball Super Vol. 1",
    text: "Aunque prefiero generalmente series con más acción, debo admitir que la profundidad emocional y el desarrollo del personaje en este volumen fueron excepcionales. Me ha hecho reflexionar sobre varios temas importantes, lo cual es raro en el género.",
  },
  {
    user: "María García",
    vol: "One Piece Vol. 1",
    text: "Un volumen interesante, aunque el final me dejó queriendo más. Siento que el clímax fue algo precipitado y algunas decisiones de los personajes no fueron del todo coherentes con su desarrollo previo. A pesar de eso, la serie sigue siendo una de mis favoritas.",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const volumeId = parseInt(params.get("volume"), 10); // Obtiene el ID del volumen de la URL

  const volume = volumeData.find((v) => v.id === volumeId); // Encuentra el volumen en la "base de datos"

  if (volume) {
    document.getElementById("title").textContent = volume.title;
    document.getElementById("cover").src = volume.coverImage;
    document.getElementById("cover").alt = `Portada de ${volume.title}`;
    document.getElementById("synopsis").textContent = volume.synopsis;
    document.getElementById("volume-info").textContent =
      `Volumen ${volume.volumeNumber}: ${volume.volumeDescription}`;
    document.getElementById("isbn").textContent = volume.isbn;
    document.getElementById("price").textContent = volume.price;
    document.getElementById("publication-date").textContent =
      volume.publicationDate;

    const genresContainer = document.getElementById("genres");
    volume.genres.forEach((genre) => {
      const genreButton = document.createElement("a");
      genreButton.href = `tienda.html?genre=${genre.toLowerCase()}`;
      genreButton.className = "btn btn-secondary me-2";
      genreButton.textContent = genre;
      genresContainer.appendChild(genreButton);
    });

    // Filtra y muestra los comentarios correspondientes a este volumen
    renderComments(volume.title);
  } else {
    console.error("Volume not found");
  }
});

function renderComments(volumeTitle) {
  const container = document.getElementById("comments");
  container.innerHTML = ""; // Limpia el contenedor antes de agregar los nuevos comentarios
  const filteredComments = comments.filter(
    (comment) => comment.vol === volumeTitle
  );

  filteredComments.forEach((comment) => {
    const commentHtml = `
        <div class="col-12 comment-container">
          <div class="card" style="margin: 5px;">
            <div class="card-body d-flex align-items-center" >
              <div class="user-icon me-3">
                <i class="bi bi-person-circle" style="font-size: 50px;"></i>
              </div>
              <div>
                <h5 class="card-title">${comment.user} - ${comment.vol}</h5>
                <p class="card-text">${comment.text}</p>
              </div>
            </div>
          </div>
        </div>
      `;
    container.innerHTML += commentHtml;
  });
}
