const volumeData = [
    {
        id: 1,
        title: "Naruto Vol. 1",
        coverImage: "img/naruto.jpg",
        synopsis: "En este primer volumen, Naruto Uzumaki enfrenta numerosos desafíos en su camino para convertirse en Hokage.",
        volumeNumber: 1,
        volumeDescription: "La prueba de la campana y la formación del Equipo 7.",
        isbn: "978-1569319000",
        price: "9.99€",
        publicationDate: "1999-03-21"
    },
    {
        id: 2,
        title: "Bleach Vol. 1",
        coverImage: "img/bleach.jpg",
        synopsis: "Ichigo Kurosaki es un adolescente con la habilidad de ver fantasmas, pero su vida cambia cuando adquiere los poderes de un Shinigami.",
        volumeNumber: 1,
        volumeDescription: "Ichigo se convierte en un Shinigami sustituto y aprende sobre los Hollows.",
        isbn: "978-1591164418",
        price: "9.99€",
        publicationDate: "2001-08-01"
    },
    {
        id: 3,
        title: "One Piece Vol. 1",
        coverImage: "img/onepiece.jpg",
        synopsis: "Monkey D. Luffy se embarca en un viaje para encontrar el legendario tesoro One Piece y proclamarse el Rey de los Piratas.",
        volumeNumber: 1,
        volumeDescription: "Luffy y su primer compañero, Zoro, buscan nuevos miembros para su tripulación.",
        isbn: "978-1421536255",
        price: "7.99€",
        publicationDate: "1997-07-22"
    },
    {
        id: 4,
        title: "Attack on Titan Vol. 1",
        coverImage: "img/aot.jpg",
        synopsis: "En un mundo asediado por titanes gigantes, los humanos viven en ciudades rodeadas por enormes muros para protegerse.",
        volumeNumber: 1,
        volumeDescription: "Eren Yeager jura vengar la destrucción de su hogar y la muerte de su madre a manos de los titanes.",
        isbn: "978-1612620244",
        price: "10.99€",
        publicationDate: "2009-03-17"
    },
    {
        id: 5,
        title: "My Hero Academia Vol. 1",
        coverImage: "img/mha.jpg",
        synopsis: "En un mundo donde casi todos tienen superpoderes, Izuku Midoriya sueña con convertirse en un héroe a pesar de no tener poderes.",
        volumeNumber: 1,
        volumeDescription: "Midoriya recibe el poder de su ídolo, All Might, y comienza su entrenamiento para ingresar a la U.A. High School.",
        isbn: "978-1421582696",
        price: "8.99€",
        publicationDate: "2014-07-03"
    },
    {
        id: 6,
        title: "Tokyo Ghoul Vol. 1",
        coverImage: "img/tokyoghoul.jpg",
        synopsis: "Kaneki se convierte en un híbrido humano-ghoul y debe aprender a vivir entre ambos mundos.",
        volumeNumber: 1,
        volumeDescription: "Kaneki lucha por mantener su humanidad mientras se adapta a su nueva vida como ghoul.",
        isbn: "978-1421580364",
        price: "9.99€",
        publicationDate: "2011-09-08"
    },
    {
        id: 7,
        title: "Dragon Ball Super Vol. 1",
        coverImage: "img/dbs.jpg",
        synopsis: "Dos hermanos alquimistas embarcan en una búsqueda para encontrar la Piedra Filosofal y restaurar sus cuerpos.",
        volumeNumber: 1,
        volumeDescription: "Los hermanos Elric descubren oscuros secretos de la alquimia mientras buscan la legendaria piedra.",
        isbn: "978-1591169208",
        price: "9.99€",
        publicationDate: "2002-05-01"
    },
    {
        id: 8,
        title: "Death Note Vol. 1",
        coverImage: "img/deathnote.jpg",
        synopsis: "Light Yagami encuentra un cuaderno con poderes para matar y comienza a usarlo para eliminar criminales.",
        volumeNumber: 1,
        volumeDescription: "Light se enfrenta a las consecuencias morales y a la persecución del detective L.",
        isbn: "978-1421501680",
        price: "8.99€",
        publicationDate: "2004-10-10"
    }
];



document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const volumeId = parseInt(params.get('volume'), 10); // Obtiene el ID del volumen de la URL

    const volume = volumeData.find(v => v.id === volumeId); // Encuentra el volumen en la "base de datos"

    if (volume) {
        document.getElementById('title').textContent = volume.title;
        document.getElementById('cover').src = volume.coverImage;
        document.getElementById('cover').alt = `Portada de ${volume.title}`;
        document.getElementById('synopsis').textContent = volume.synopsis;
        document.getElementById('volume-info').textContent = `Volumen ${volume.volumeNumber}: ${volume.volumeDescription}`;
        document.getElementById('isbn').textContent = volume.isbn;
        document.getElementById('price').textContent = volume.price;
        document.getElementById('publication-date').textContent = volume.publicationDate;
    } else {
        console.error('Volume not found');
    }
});
